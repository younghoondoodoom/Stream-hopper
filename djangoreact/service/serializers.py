from rest_framework import serializers
from .models import *

class OTTserviceSerializer(serializers.ModelSerializer):    
    class Meta:
        model = OTTservice
        fields = '__all__'
        