from django.urls import path, include
from .views import *

urlpatterns = [
    path('OTT/', OTTserviceListCreateView.as_view())
]