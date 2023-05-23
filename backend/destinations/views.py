from rest_framework.decorators import APIView
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import DestinationSerializer
from .models import Destinations




@api_view(['GET','POST'])
def get_destinations(request):

    if request.method == 'GET':
        budget = request.query_params.get('budget')
        print(budget)

        queryset = Destinations.object.all()

        if budget:
            queryset = queryset.filter(budget_type__social_class = budget) 
        
        serializer = DestinationSerializer(queryset, many=True)
        return Response(serializer.data)



