from django.db import models

from users.models import CustomUser
from entertainment.models import OTT, Contents

# Create your models here.
class MyOTT(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    ott = models.ForeignKey(OTT, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class MyContents(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    contents = models.ForeignKey(Contents, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
