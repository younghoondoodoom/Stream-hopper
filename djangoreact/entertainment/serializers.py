from rest_framework import serializers
from .models import Movies, MovieReviews


# ModelSerializer는 기본적으로 create와 update 기능이 추가 되어있다.
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = '__all__'
        
class MovieReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieReviews
        fields = '__all__'