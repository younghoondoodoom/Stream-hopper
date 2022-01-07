from django.db import models

from users.models import CustomUser
from entertainment.models import OTT, Contents

# Create your models here.
class MyOTT(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    OTT = models.ForeignKey(OTT, on_delete=models.CASCADE)


class MyContents(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    contents = models.ManyToManyField(Contents)
    
