from django.shortcuts import get_list_or_404
from rest_framework.permissions import  IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import ListSerializer
from .models import List


# Create your views here.
# testing purposes
@api_view(['GET'])
def get_list(request):
    lists =List.objects.all()
    serializer = ListSerializer(lists, many=True)
    return Response(serializer.data)







#Protected/Actual needed function.
@api_view(['GET', 'POST',])
@permission_classes([IsAuthenticated]) # the personmissions class ties into Django's standard django.contrib.auth model permissions. This permission must only be applied to views that have a .queryset property or get_queryset () method. Authorization will only be granted if the user is authenticated and has the relevant model permissions assigned.
#We are able to use with wihen AllowAnyis in the Params in list ([]).As Well as IsAuthenticated. 
def get_travelers_items(request): #What goes into the parameters can be used for the function.
    print(
        'User ', f" {request.user.id} {request.user.email} {request.user.username}")
    if request.method =='GET':
        travelers_list = List.objects.filter(user_id =request.user.id)
        serializer = ListSerializer(travelers_list, many=True)
        return Response(serializer.data)
    elif request.method =='POST':
        serializer = ListSerializer( data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    


       
        
