from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    SEX_CHOICE = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    
    user_email = models.EmailField(max_length=254)
    user_name = models.CharField(max_length=32)
    password = models.CharField(max_length=50)
    sex = models.CharField(max_length=2, choices = SEX_CHOICE, null=True)
    age = models.IntegerField(null = True)
    register_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.useremail