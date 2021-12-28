from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django.db.models import Q
from django.http import Http404
from rest_framework.exceptions import ParseError

from .serializers import MovieSerializer, MovieReviewSerializer
from .models import Movies, MovieReviews
from .pagination import SearchMoviePageNumberPagination

# Create your views here.

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
    

class MovieSearchAPIView(ModelViewSet):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer
    pagination_class = SearchMoviePageNumberPagination
        
    filter_backends = [SearchFilter]
    search_fields = ['title', 'country', 'actor', 'director']