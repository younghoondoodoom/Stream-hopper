from rest_framework import serializers
from .models import *


# ModelSerializer는 기본적으로 create와 update 기능이 추가 되어있다.

# Contents Serializers

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = '__all__'
        
class ContentReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentReviews
        fields = '__all__'

class OTTSerializer(serializers.ModelSerializer):
    class Meta:
        model = OTT
        fields = '__all__'