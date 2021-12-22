from rest_framework.serializers import ModelSerializer

from .models import CustomUser

class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'user_email', 'user_name', 'password', 'sex', 'age', 'register_at') # issue possible
        