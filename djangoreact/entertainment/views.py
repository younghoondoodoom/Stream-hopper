from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from django.db.models import Q
from rest_framework.exceptions import ParseError

from .serializers import MovieSerializer, MovieReviewSerializer
from .models import Movies, MovieReviews
from .pagination import SearchMoviePageNumberPagination

# Create your views here.

# movie 관련 APIView

class MovieListAPIView(APIView):
    def get(self, request):
        movies = Movies.objects.all().order_by('-vote_count', '-rating')[:3]
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MovieSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class MovieDetailAPIView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Movies, pk=pk)
    
    def get(self, request, pk, format=None):
        movie = self.get_object(pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    
# Movie Search

class ContentSearchCreateView(ListCreateAPIView):
    name = 'content-list'
    serializer_class = MovieSerializer
    pagination_class = SearchMoviePageNumberPagination
    
    def get_queryset(self):
        queryset = Movies.objects.all()
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
            queryset = queryset.filter(title__contains=title)
        
        if actor is not None and title is None and director is None:
            queryset = queryset.filter(actor__icontains=actor)
            
        if director is not None and title is None and actor is None:
            queryset = queryset.filter(director__icontains=director)
            
        if title is not None and actor is not None and director is not None:
            queryset = queryset.filter(
                Q(title__icontains=title) | Q(actor__icontains=actor) | Q(director__icontains=director)
            )

        return queryset



    
