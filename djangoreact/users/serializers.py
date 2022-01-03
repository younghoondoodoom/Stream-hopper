from rest_framework.serializers import ModelSerializer

from .models import CustomUser


# model 바꾸면 field change는 필수
class CustomUserSerializer(ModelSerializer):    
    class Meta:
        model = CustomUser
        fields = '__all__' # issue possible
        