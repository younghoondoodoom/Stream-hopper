from django.urls import path, include
from .views import *

# movie top 3: /entertainment/movie/list
# movie detail: /entertainment/movie/detail/<int:id>
# movie search
# - title만 : /entertainment/movie/search/?title={str}
# - actor만 : /entertainment/movie/search/?actor={str}
# - director만 : /entertainment/movie/search/?director={str}
# -3개 다 : /entertainment/movie/search/?title={str}&actor={str}&director={str}


urlpatterns = [
    path('movie/list', MovieListAPIView.as_view()),
    path('movie/detail/<int:pk>', MovieDetailAPIView.as_view()),
    path('movie/search/', ContentSearchCreateView.as_view()),
]
