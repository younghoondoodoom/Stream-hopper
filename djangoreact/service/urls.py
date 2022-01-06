from django.urls import path, include
from .views import *

urlpatterns = [
    path('ott', OTTserviceCreateView.as_view()),
    path('genretoptwo', GiveTopContentByGenre.as_view()),
    path('content', ContentRecommendServiceListView.as_view())
]