from rest_framework import serializers
from .models import *

class MyOTTSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyOTT
        fields = '__all__'
        
class MyContentsSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = MyContents
        fields = '__all__'
