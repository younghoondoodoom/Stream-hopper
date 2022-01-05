from rest_framework import serializers
from .models import *

class OTTserviceSerializer(serializers.ModelSerializer):
    # user_id = serializers.HiddenField(default=serializers.CurrentUserDefault())
    
    class Meta:
        model = OTTservice
        fields = '__all__'