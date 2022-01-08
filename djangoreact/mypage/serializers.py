from rest_framework import serializers
from .models import *
from entertainment.serializers import ContentSerializer

class MyOTTSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyOTT
        fields = '__all__'
        
class MyContentsSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = MyContents
        fields = '__all__'
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['contents'] = ContentSerializer(instance.contents).data
        return response
