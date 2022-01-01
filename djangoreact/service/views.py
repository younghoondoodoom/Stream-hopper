from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import OTTserviceSerializer
from .models import OTTservice

# Create your views here.

# OTTservice APIVIEWS

class OTTserviceListCreateView(CreateAPIView):
    name = "OTTservice ListCreateView"
    serializer_class = OTTserviceSerializer
    permissions_class = [IsAuthenticated,]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # user_id를 같이 포함하기 위함.
        OTTservice.objects.create(
            user_id = request.user,
            age = serializer.data.get('age'),
            gender = serializer.data.get('gender'),
            member_number = serializer.data.get('member_number'),
            price_range = serializer.data.get('price_range'),
            genre = serializer.data.get('genre'),
        )
        
        headers = self.get_success_headers(serializer.data)
        # 여기서 input해주면 됨.
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    