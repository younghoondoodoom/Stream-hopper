from django.urls import include, path
from .views import PermissionsAPIView

# 로그인 (POST) : /users/auth/login/
# 로그아웃(POST) : /users/auth/logout/ 
# 회원가입(POST) : /users/auth/register/
# token을 통한 권한 확인 : /users/auth/permission

urlpatterns = [
    path("auth/", include('dj_rest_auth.urls')),  
    path("auth/register/", include('dj_rest_auth.registration.urls')),
    path("auth/permission", PermissionsAPIView.as_view())
]