from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

from .serializers import *
from .models import *
from .pagination import SearchContentPageNumberPagination

# Create your views here.

# CONTENTS APIVIEWS

class ContentListAPIView(APIView):
    def get(self, request):
        contents = Contents.objects.all().order_by('-vote_count', '-rating')[:3]
        serializer = ContentSerializer(contents, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class ContentsDetailAPIView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Contents, pk=pk)
    
    def get(self, request, pk, format=None):
        movie = self.get_object(pk)
        serializer = ContentSerializer(movie)
        return Response(serializer.data)
    
# CONTENTS SEARCH

class ContentSearchCreateView(ListCreateAPIView):
    name = 'content-list'
    serializer_class = ContentSerializer
    pagination_class = SearchContentPageNumberPagination
    
    def get_queryset(self):
        queryset = Contents.objects.all()
        return queryset
    
    def list(self, request, *args, **kwargs):
        queryset = self.set_filters(self.get_queryset(), request)
        serializer = self.get_serializer(queryset, many=True)
        page = self.paginate_queryset(queryset)

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        return Response(serializer.data)
    
    def set_filters(self, queryset, request):
        title = request.query_params.get('title', None)
        actor = request.query_params.get('actor', None)
        director = request.query_params.get('director', None)
        
        if title is not None and actor is None and director is None:
            if queryset.filter(kor_title__icontains=title):
                queryset = queryset.filter(kor_title__icontains=title)
            else:
                queryset = queryset.filter(title__icontains=title)
        
        if actor is not None and title is None and director is None:
            queryset = queryset.filter(actor__icontains=actor)
            
        if director is not None and title is None and actor is None:
            queryset = queryset.filter(director__icontains=director)
            
        if title is not None and actor is not None and director is not None:
                queryset = queryset.filter(
                    Q(title__icontains=title) | Q(kor_title__icontains=title) | Q(actor__icontains=actor) | Q(director__icontains=director)
                )

        return queryset
