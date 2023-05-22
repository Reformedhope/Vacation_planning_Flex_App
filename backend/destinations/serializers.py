from  rest_framework import serializers
from  .models import Destinations

class DestinationSerializer(serializers.ModelSerializer):
    class meta:
        model = Destinations
        fields = ['id', 'user' ,'name', 'terrain', 'city', 'state', 'average_summer_temp', 'average_winter_type', 'budget_type_id']
        depth = 1
        budget_type_id = serializers.IntegerField(write_only=True)
        