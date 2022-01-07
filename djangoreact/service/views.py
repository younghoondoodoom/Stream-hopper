from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from django.db.models import Prefetch

from .ds.collaborative_recommender import *
from .ds.content_recommender import get_content_recommendations
from .serializers import OTTserviceSerializer
from .models import OTTservice, ContentRecommendation
from entertainment.models import Contents, OTT
from entertainment.serializers import ContentSerializer, OTTSerializer, ContentAndRecommendSerializer
from mypage.models import *

import random

# Create your views here.

# OTTservice APIVIEWS

class OTTserviceCreateView(CreateAPIView):
    name = "OTTservice"
    serializer_class = OTTserviceSerializer
    authentication_classes = [TokenAuthentication]
    permissions_class = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # db에 입력 정보 넣어줌.(데이터 분석팀의 요청)
        user_taste = OTTservice.objects.create(
            user = request.user,
            age = serializer.data.get('age'),
            gender = serializer.data.get('gender'),
            member_number = serializer.data.get('member_number'),
            member_child_count = serializer.data.get('member_child_count'),
            member_adult_count = serializer.data.get('member_adult_count'),
            pixel = serializer.data.get('pixel'),
            price_range = serializer.data.get('price_range'),
            genre = serializer.data.get('genre'),
            first = serializer.data.get('first'),
            second = serializer.data.get('second'),
            third = serializer.data.get('third'),
        )
        tmdb_id_list = []
        for content in serializer.data.get('prefer_contents'):
            prefer_content = Contents.objects.get(id=content)
            tmdb_id_list.append(str(prefer_content.tmdb_id))
            user_taste.prefer_contents.add(prefer_content)
        
        print(",".join(tmdb_id_list))
                
        user_taste.tmdb_id = ",".join(tmdb_id_list)
        user_taste.save()

        
        # # OTT추천 쿼리
        # recommendations = []
        # for i in range(3):
        #     get_recommendations = get_content_recommendations(serializer.data.get('prefer_contents')[i])
        #     recommendations += list(get_recommendations.keys())
                
        # ott_prefer_dict = {'netflix':0, 'disney':0, 'amazon':0, 'hulu':0}
        
        # for recommend in recommendations:
        #     query = Contents.objects.values_list('ott', flat=True).get(id=recommend)
        #     if query == "neflix":
        #         ott_prefer_dict['netflix'] += 1
        #     elif query == "disney":
        #         ott_prefer_dict['disney'] += 1
        #     elif query == "amazon":
        #         ott_prefer_dict['amazon'] += 1
        #     elif query == "hulu":
        #         ott_prefer_dict['hulu'] += 1
        #     else:
        #         pass
        
        # ott_prefer = sorted(ott_prefer_dict.items(), key=lambda x:x[1], reverse=True)
        
        # most_prefer_ott = ott_prefer[0][0]
        # cost = serializer.data.get('price_range')
        
        # queryset = OTT.objects.filter(name__icontains=most_prefer_ott)
        # queryset = queryset.annotate(abs_diff=Func(F('cost')-cost, function='ABS')).order_by('abs_diff')
        
        queryset = OTT.objects.all()[0:1]
        
        OTTserrializer = OTTSerializer(queryset, many=True)
        
        headers = self.get_success_headers(serializer.data)
        return Response(OTTserrializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    


genre_list = [
    'Drama',
    'Comedy',
    'Action',
    'Adventure',
    'International',
    'Family',
    'Animation',
    'Horror',
    'Romance',
    'Thriller',
    'Fantasy',
    'Drama',
    'Sci'
]

class GiveTopContentByGenre(ListAPIView):
    name = "Give Top Contents By Genre"
    serializer_class = ContentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        random_int = random.randint(0, 8)
        
        queryset = Contents.objects.filter(
            genre__icontains=genre_list[0]
        ).order_by('-vote_count', '-rating')[random_int:random_int+2]
        
        for i in range(1, 13):
            qs = Contents.objects.filter(
                genre__icontains=genre_list[i]
                ).order_by('-vote_count', '-rating')[random_int:random_int+2]
            queryset = queryset.union(qs)
        
        return queryset


class ContentRecommendServiceListView(ListAPIView):
    name = "MovieRecommend"
    serializer_class = ContentAndRecommendSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = OTT.objects.all()[0:1]
    
    def get_queryset(self):
        current_user = self.request.user.id
        queryset = OTT.objects.all()[0:1]
        print(queryset)
        try:
            ContentRecommendation.objects.filter(user_id=current_user)
            result = colloborative_recommender(current_user)
        except:
            print('오류 처리')
            result = new_collaborative(current_user)
        
        # 넣어야할 db : ContentRecommendation
        # 보내줘야할 db : content, contentreco
        
        for i in range(len(result)):
            tmdb_id = (result[i][0])
            score = result[i][2]
            content = Contents.objects.filter(tmdb_id=tmdb_id)[0]
            recommend = ContentRecommendation(user=self.request.user, recommend_content=content, score=score)
            recommend.save()    
        
        queryset = Contents.objects.filter(tmdb_id=result[0][0])[0:1]
        
        for i in range(1, len(result)):
            qs = Contents.objects.filter(tmdb_id=result[i][0])[0:1]
            queryset = queryset | qs
                
        queryset = queryset.prefetch_related(
            Prefetch('contentrecommendation_set', 
                     queryset = ContentRecommendation.objects.filter(user_id=current_user).order_by('-created_at'))
            )
        
        
        return queryset[:10]
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
        