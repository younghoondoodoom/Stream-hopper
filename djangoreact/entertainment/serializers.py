from rest_framework import serializers
from .models import *


# ModelSerializer는 기본적으로 create와 update 기능이 추가 되어있다.

# Movies Serializers

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = '__all__'
        
class MovieReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieReviews
        fields = '__all__'
        
# TVshows Serializers

class TVshowSerializer(serializers.ModelSerializer):
    class Meta:
        model = TVshows
        fields = '__all__'
        
class TVshowReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = TVshowReviews
        fields = '__all__'
        