from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from django.db.models import Q, Count

from .ds.collaborative_recommender import *
from .ds.content_recommender import get_content_recommendations
from .serializers import OTTserviceSerializer
from .models import OTTservice
from entertainment.models import Contents
from entertainment.serializers import ContentSerializer

import random

# Create your views here.

# OTTservice APIVIEWS

class OTTserviceListCreateView(CreateAPIView):
    name = "OTTservice ListCreateView"
    serializer_class = OTTserviceSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
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
        
        # 제목 입력 받기
        recommendation = get_content_recommendations(serializer.data.get('prefer_contents')[0])
        print(recommendation)
        
        
        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
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
        random_int = int(random.randint(0, 8))
        
        queryset = Contents.objects.filter(
            genre__icontains=genre_list[0]
        ).order_by('-vote_count', '-rating')[random_int:random_int+2]
        
        for i in range(1, 10):
            pre_queryset_len = len(queryset)
           
            while (len(queryset)-pre_queryset_len) != 2:
                random_int = int(random.randint(0, 8))
                qs = Contents.objects.filter(
                    genre__icontains=genre_list[i]
                    ).order_by('-vote_count', '-rating')[random_int:random_int+1]
                queryset = queryset.union(qs)
        
        return queryset
