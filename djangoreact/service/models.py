from django.db import models
from users.models import CustomUser
 

# Create your models here.

class OTTservice(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    age = models.IntegerField(default=0, blank=True)
    gender = models.CharField(max_length=10, blank=True)
    member_number = models.IntegerField(default=1, blank=True)
    price_range = models.IntegerField(default=0, blank=True)
    genre = models.CharField(max_length=100,  blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
 