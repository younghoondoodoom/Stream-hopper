from django.db import models

from users.models import CustomUser
from entertainment.models import OTT

# Create your models here.

class OTTRecommendation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    recommended_ott = models.ForeignKey(OTT, on_delete=models.CASCADE)
    
    def __str__(self):
        self.user

class ContentRecommendation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    recommended_content = models.ForeignKey(OTT, on_delete=models.CASCADE)
    
    def __str__(self):
        self.user