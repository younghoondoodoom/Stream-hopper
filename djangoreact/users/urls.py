from django.urls import include, path

# 로그아웃 (토큰 없앰) : domain/users/auth/logout
# 회원가입 : domain/users/auth/register

urlpatterns = [
    path("auth/", include('dj_rest_auth.urls')), 
    path("auth/register", include('dj_rest_auth.registration.urls'))
]