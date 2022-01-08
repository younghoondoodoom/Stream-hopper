from rest_framework import serializers

from .models import CustomUser


# model 바꾸면 field change는 필수
class CustomUserSerializer(serializers.ModelSerializer):    
    class Meta:
        model = CustomUser
        fields = '__all__' # issue possible
    
class CustomSerializer(serializers.Serializer):
    user = serializers.CharField(max_length=100)
    auth = serializers.CharField(max_length=100)