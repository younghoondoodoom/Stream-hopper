from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response

from .models import CustomUser
from .serializers import CustomUserSerializer, CustomSerializer

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# Create your tests here.

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAdminUser,]

class PermissionsAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CustomSerializer
    
    def get(self, request, format=None):    
        content = {
            'user': str(request.user.username), 
        }
        return Response(content)