from  rest_framework import serializers
from  .models import Destinations

class DestinationSerializer(serializers.ModelSerializer):
    budget_type_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Destinations
        fields = ['id', 'name', 'terrain', 'city', 'state', 'average_summer_temp', 'average_winter_temp', 'budget_type', 'budget_type_id']
        depth = 1
       
        