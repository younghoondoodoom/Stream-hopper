from django.db import models
from django.contrib.auth.models import AbstractUser
from allauth.socialaccount.models import SocialAccount
# Create your models here.


class CustomUser(AbstractUser):
    # email을 id로 사용하기 위함.
    USERNAME_FIELD = 'email'
    
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=32, unique=False)
    password = models.CharField(max_length=100)
    register_at = models.DateTimeField(auto_now_add=True)
    
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return self.email

