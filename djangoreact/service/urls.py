from django.urls import path, include
from .views import *

urlpatterns = [
    path('ott', OTTserviceListCreateView.as_view()),
    path('genretoptwo', GiveTopContentByGenre.as_view()),
]