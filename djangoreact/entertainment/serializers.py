from rest_framework import serializers
from .models import *
from service.serializers import ContentRecommendationSerializer

# Contents Serializers
        
class ContentReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentReviews
        fields = '__all__'

class OTTSerializer(serializers.ModelSerializer):
    class Meta:
        model = OTT
        fields = '__all__'
        
class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = '__all__'
        
class ContentAndRecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = '__all__'
     
    contentrecommendation_set = ContentRecommendationSerializer(many=True)
