from django.urls import include, path
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = 'http://127.0.0.1:3000' #배포 시 서버주소 변경 필요
    client_class = OAuth2Client

# 로그인 (토큰 생성) : domain/users/auth/login/
# 로그아웃 (토큰 없앰) : domain/users/auth/logout/
# 회원가입 : domain/users/auth/register(필수 입력: email, password1, password2 선택 입력: age, sex, username(입력 안하면 자동으로 email에서 @ 앞에 부분만 떼어감.))

urlpatterns = [
    path('google', GoogleLogin.as_view(), name='google_login'),
    path("auth/", include('dj_rest_auth.urls')),  
    path("auth/register", include('dj_rest_auth.registration.urls')) 
]