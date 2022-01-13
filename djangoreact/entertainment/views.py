from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

from .serializers import *
from .models import *
from .pagination import SearchContentPageNumberPagination

# Create your views here.

# CONTENTS APIVIEWS

class ContentListAPIView(ListAPIView):
    name = "Content TOP3"
    serializer_class = ContentSerializer
    queryset = Contents.objects.all().order_by('-vote_count', '-rating')[:3]
    permissions_classes = [IsAuthenticated,]


class ContentsDetailAPIView(APIView):
    name = "Detail Contents"
    def _get_object(self, pk):
        return get_object_or_404(Contents, pk=pk)
    
    def get(self, request, pk, format=None):
        movie = self._get_object(pk)
        serializer = ContentSerializer(movie)
        return Response(serializer.data)
    

        
    
# CONTENTS SEARCH

class ContentSearchCreateView(ListAPIView):
    name = 'content-list'
    serializer_class = ContentSerializer
    pagination_class = SearchContentPageNumberPagination
    queryset = Contents.objects.all()
    
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
                queryset = queryset.filter(kor_title__icontains=title).order_by('-vote_count', '-rating')
            else:
                queryset = queryset.filter(title__icontains=title)
        
        if actor is not None and title is None and director is None:
            queryset = queryset.filter(actor__icontains=actor).order_by('-vote_count', '-rating')
            
        if director is not None and title is None and actor is None:
            queryset = queryset.filter(director__icontains=director).order_by('-vote_count', '-rating')
            
        if title is not None and actor is not None and director is not None:
                queryset = queryset.filter(
                    Q(title__icontains=title) | Q(kor_title__icontains=title) | Q(actor__icontains=actor) | Q(director__icontains=director)
                ).order_by('-vote_count', '-rating')

        return queryset

