from rest_framework.generics import ListCreateAPIView, ListAPIView, CreateAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import *
from .models import *
from .pagination import MyContentsPage
from entertainment.serializers import ContentSerializer
from entertainment.models import Contents, OTT

# Create your views here.

class MyContentsCreateView(CreateAPIView):
    name = 'My Contents Create'
    serializer_class = MyContentsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contents.objects.all()

class MyContentsListView(ListAPIView):
    name = 'My Contents List'
    serializer_class = ContentSerializer
    authentication_classes = [TokenAuthentication]
    pagination_class = MyContentsPage
    
    def get_queryset(self):
        mycontents = MyContents.objects.values('contents').filter(user_id=self.request.user.id).distinct()
        queryset = Contents.objects.filter(id=mycontents[0]['contents'])
        if len(mycontents) <= 5:    
            for i in range(1,len(mycontents)):
                prefer = mycontents[i]['contents']
                qs = Contents.objects.filter(id=prefer)
                queryset = queryset.union(qs)
        else:
            for i in range(1,5):
                prefer = mycontents[i]['contents']
                qs = Contents.objects.filter(id=prefer)
                queryset = queryset.union(qs)
        return queryset

class MyOTTListView(ListAPIView):
    name = "My OTT List"
    serializer_class = MyOTTSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        myott = MyOTT.objects.values('cotents').filter(user_id=self.request.user.id).distinct()
        queryset = OTT.objects.filter(id=myott[0]['OTT'])
        if len(myott) <= 5:
            for i in range(1, len(myott)):
                prefer = myott[i]['OTT']
                qs = OTT.objects.filter(id=prefer)
                queryset = queryset.union(qs)
        else:
            for i in range(1, 5):
                prefer = myott[i]['OTT']
                qs = OTT.objects.filter(id=prefer)
                queryset = queryset.union(qs)
            return queryset
    
