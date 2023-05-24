from  rest_framework import serializers
from  .models import Destinations

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destinations
        fields = ['id', 'name', 'terrain', 'city', 'state', 'average_summer_temp', 'average_winter_temp', 'budget_type']
        depth = 1
        # budget_type_id = serializers.IntegerField(write_only=True)
        