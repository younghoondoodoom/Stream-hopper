from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser

from .models import CustomUser
from .serializers import CustomUserSerializer

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
# Create your tests here.

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAdminUser]
    
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = 'http://127.0.0.1:3000' #배포 시 서버주소 변경 필요
    client_class = OAuth2Client