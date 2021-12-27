from django.db import models
from django.contrib.auth.models import AbstractUser
from allauth.socialaccount.models import SocialAccount
# Create your models here.


class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=32, unique=False)
    password = models.CharField(max_length=50)
    register_at = models.DateTimeField(auto_now_add=True)
    
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return self.email

SNS_CHOICES = (
    ('G', 'Google'),
    ('E', 'Email'),
)

SEX_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
)
    
class mypage(models.Model):
    user = models.ForeignKey(CustomUser, null=True, on_delete = models.CASCADE)
    sex = models.CharField(max_length=1, choices = SEX_CHOICES, null=True)
    age = models.IntegerField(null = True)
    
    # 영화 db와 many to many 관계로 id를 활용해 연결 추후 수정 필요
    #preferred_movies = models.ManyToManyField(영화 DB 모델명,blank=True) 
    #preferred_tv= models.ManyToManyField(드라마 DB 모델명, blank=True) 
    
    def __str__(self):
        return self.email