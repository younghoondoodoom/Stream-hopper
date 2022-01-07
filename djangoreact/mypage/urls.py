from django.urls import path
from .views import *

urlpatterns = [
    path('contents/create', MyContentsCreateView.as_view()),
    path('contents/list', MyContentsListView.as_view()),
    path('ott/list', MyOTTListView.as_view())
]