from django.urls import include, path

# 로그인 (POST) : /users/auth/login/
# 로그아웃(POST) : /users/auth/logout/ 
# 회원가입(POST) : /users/auth/register/

urlpatterns = [
    path("auth/", include('dj_rest_auth.urls')),  
    path("auth/register/", include('dj_rest_auth.registration.urls')),
]