from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser

from .models import CustomUser
from .serializers import CustomUserSerializer

# Create your tests here.

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer = CustomUserSerializer
    permission_classes = [IsAdminUser]