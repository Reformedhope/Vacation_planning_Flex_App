from rest_framework.decorators import APIView
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import DestinationSerializer
from .models import Destinations
from budgets.models import Budget
from budgets.serializers import BudgetSerializer
from random import choice

# gets a random location with a specific budget.- Works 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_location_by_budget(request, budget_type_id):
     #Query single budget based on its id
    #  budgets = Budget.objects.get(id = budget_type_id)
     # finds destinations for the budget whose pk was passed in request url (budget_url)
     destin = Destinations.objects.filter( budget_type__id = budget_type_id)
     #Turn Queryset 9dirty data into JSON
    #  budget_serializer = BudgetSerializer(budgets)
     single_dest = choice(destin)
     destination_serializer= DestinationSerializer(single_dest)
     return Response (destination_serializer.data)#



# @api_view(['GET']) - doesnt work
# @permission_classes([IsAuthenticated])
# def get_all_location_by_budget(request, budget_type_id):
#       #Query single budget based on its id
#      budgets = Budget.objects.get(id = budget_type_id)
#      # finds destinations for the budget whose pk was passed in request url (budget_url)
#      destin = Destinations.objects.filter( budget_type_id = budget_type_id)
#      #Turn Queryset 9dirty data into JSON
#      budget_serializer = BudgetSerializer(budgets)
   
#      destination_serializer= DestinationSerializer(destin, many = True)
#      return Response (destination_serializer.data)#
  




#gets all destinations - works 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_destinations(request):
    destinations = Destinations.objects.all()
    serializer = DestinationSerializer(destinations, many=True)
    return Response(serializer.data)



#gets destinations by terrains - works 
@api_view(['GET'])
@permission_classes([IsAuthenticated])# need to change this to IsAuthenticated
def get_all_beach_locations(request, searched_location_type):
        area = Destinations.objects.filter(terrain__icontains = searched_location_type)
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



