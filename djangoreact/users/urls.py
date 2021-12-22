from django.urls import include, path

urlpatterns = [
    path("auth/", include('dj_rest_auth.urls')),  # 권한 요청하는 url은 domain/users/auth/
    path("auth/register", include('dj_rest_auth.registration.urls')) # 회원 가입 url domain/users/auth/register
]