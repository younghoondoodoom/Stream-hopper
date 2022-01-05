from django.db import models
from users.models import CustomUser
from entertainment.models import Contents
 

# Create your models here.

class OTTservice(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    age = models.IntegerField(default=0, blank=True)
    gender = models.CharField(max_length=10, blank=True)
    member_number = models.IntegerField(default=1, blank=True)
    member_child_count = models.IntegerField(default=1, blank=True)
    member_teenager_count = models.IntegerField(default=1, blank=True)
    member_adult_count = models.IntegerField(default=1, blank=True)
    price_range = models.IntegerField(default=0, blank=True)
    genre = models.CharField(max_length=100,  blank=True)
    pixel = models.CharField(max_length = 100, blank=True)
    prefer_contents = models.ManyToManyField(Contents)
    created_at = models.DateTimeField(auto_now_add=True)
    
 