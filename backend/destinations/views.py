from rest_framework.decorators import APIView
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import DestinationSerializer
from .models import Destinations




@api_view(['GET'])
# @permission_classes([AllowAny])
def get_all_destinations(request):
    destinations = Destinations.objects.all()
    serializer = DestinationSerializer(destinations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])# need to change this to IsAuthenticated
def get_all_beach_locations(request, terrain):
    
    if request.method == 'GET':
        area = Destinations.objects.filter(terrrain = terrain)
        serializer = DestinationSerializer(area, many=True)
        return Response(serializer.data)
    









# this is a get request that is filering by the social class BUT DOES NOT WORK YEEEET!!!

@api_view(['GET','POST'])
def get_destinations_by_class(request):

    if request.method == 'GET':
        
        
        social_class = request.query_params.get('social_class')
        print(social_class)

        queryset = Destinations.object.all()

        if social_class:
            queryset = queryset.filter(budget_type__social_class = social_class) 
        
        serializer = DestinationSerializer(queryset, many=True)
        return Response(serializer.data)



