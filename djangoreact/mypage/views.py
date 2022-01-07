from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status

from .serializers import *
from .models import *
from .pagination import MyContentsPage
from entertainment.serializers import ContentSerializer, OTTSerializer
from entertainment.models import Contents, OTT

# Create your views here.

class MyContentsCreateView(CreateAPIView):
    name = 'Create My Contents'
    serializer_class = MyContentsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contents.objects.all()
    
class MyContentsDestroyView(DestroyAPIView):
    name = "Destroy My Contents"
    serializer_class = MyContentsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = MyContents.objects.all()
        
class MyContentsListView(ListAPIView):
    name = 'My Contents List'
    serializer_class = ContentSerializer
    authentication_classes = [TokenAuthentication]
    pagination_class = MyContentsPage
    
    def get_queryset(self):
        mycontents = MyContents.objects.filter(user_id=self.request.user.id).order_by('-created_at')
        mycontents = mycontents.values('contents_id')
        if len(mycontents) != 0:
            queryset = Contents.objects.filter(id=mycontents[0]['contents_id'])
            for i in range(1,len(mycontents)):
                qs = Contents.objects.filter(id=mycontents[i]['contents_id'])
                queryset = queryset.union(qs)
            return queryset
        else:
            queryset = mycontents

class MyOTTListView(ListAPIView):
    name = "My OTT List"
    serializer_class = OTTSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
            myott = MyOTT.objects.filter(user_id=self.request.user.id).order_by('-created_at')
            myott = myott.values('ott_id')
            if len(myott) != 0:
                queryset = OTT.objects.filter(id=myott[0]['ott_id'])
                for i in range(1,len(myott)):
                    qs = OTT.objects.filter(id=myott[i]['ott_id'])
                    queryset = queryset.union(qs)
                    return queryset
            else:
                queryset = myott
                return queryset         
        
        
    
