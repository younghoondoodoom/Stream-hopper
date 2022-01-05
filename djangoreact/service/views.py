from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from django.db.models import Func, F

from .ds.collaborative_recommender import *
from .ds.content_recommender import get_content_recommendations
from .serializers import OTTserviceSerializer
from .models import OTTservice
from entertainment.models import Contents, OTT
from entertainment.serializers import ContentSerializer, OTTSerializer

import random

# Create your views here.

# OTTservice APIVIEWS

class OTTserviceListCreateView(CreateAPIView):
    name = "OTTservice ListCreateView"
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
            member_teenager_count = serializer.data.get('member_teenager_count'),
            member_adult_count = serializer.data.get('member_adult_count'),
            pixel = serializer.data.get('pixel'),
            price_range = serializer.data.get('price_range'),
            genre = serializer.data.get('genre'),
        )
        for content in serializer.data.get('prefer_contents'):
            prefer_content = Contents.objects.get(id=content)
            user_taste.prefer_contents.add(prefer_content)
        
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
    'Thriller'
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
        
        for i in range(1, 10):
            pre_queryset_len = len(queryset)
           
            while (len(queryset)-pre_queryset_len) != 2:
                random_int = random.randint(0, 8)
                qs = Contents.objects.filter(
                    genre__icontains=genre_list[i]
                    ).order_by('-vote_count', '-rating')[random_int:random_int+1]
                queryset = queryset.union(qs)
        
        return queryset
