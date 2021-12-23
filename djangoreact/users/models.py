from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    SEX_CHOICE = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    
    email = models.EmailField(max_length=254)
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=50)
    sex = models.CharField(max_length=6, null=True)
    age = models.IntegerField(null = True)
    register_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.email