from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import OTTserviceSerializer
from entertainment.models import Contents
from users.models import CustomUser

# Create your views here.

# OTTservice APIVIEWS

class OTTserviceListCreateView(CreateAPIView):
    name = "OTTservice ListCreateView"
    serializer_class = OTTserviceSerializer
    permissions_class = [IsAuthenticated,]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        headers = self.get_success_headers(serializer.data)
        
        # 여기서 input해주면 됨.
        age = serializer.data.get('age')
        gender = serializer.data.get('gender')
        member_number = serializer.data.get('member_number')
        price_range = serializer.data.get('price_range')
        genre = serializer.data.get('genre')
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    