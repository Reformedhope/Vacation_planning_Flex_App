from rest_framework.decorators import APIView
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import DestinationSerializer
from .models import Destinations


# Create your views here.
