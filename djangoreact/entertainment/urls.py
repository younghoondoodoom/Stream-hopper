from django.urls import path, include
from .views import MovieListAPIView, MovieDetailAPIView, MovieSearchAPIView

# main에 띄우는 movie top3 : domain/entertainment/movie/list
# movie detail: domain/entertainment/movie/detail/<int:id>
# movie search: domain/entertainment/movie/?search=str

urlpatterns = [
    path('movie/list', MovieListAPIView.as_view()),
    path('movie/detail/<int:pk>', MovieDetailAPIView.as_view()),
    path('movie/', MovieSearchAPIView.as_view({'get':'list'})),
]
