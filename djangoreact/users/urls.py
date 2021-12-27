from django.urls import include, path
from .views import GoogleLogin

# 로그아웃 (토큰 없앰) : domain/users/auth/logout
# 회원가입 : domain/users/auth/register

urlpatterns = [
    path('google/', GoogleLogin.as_view(), name='google_login'),
    path("auth/", include('dj_rest_auth.urls')),  # 권한 요청하는 url은 domain/users/auth/
    path("auth/register", include('dj_rest_auth.registration.urls')) # 회원 가입 url domain/users/auth/register
]