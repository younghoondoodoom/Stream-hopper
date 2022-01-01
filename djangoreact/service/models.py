from django.db import models
from users.models import CustomUser
from entertainment.models import Contents
 

# Create your models here.

class OTTservice(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=10)
    member_number = models.IntegerField(default=1)
    price_range = models.IntegerField(default=0)
    genre = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user_id