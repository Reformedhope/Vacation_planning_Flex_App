from rest_framework import serializers
from.models import List

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = [ 'id', 'items', 'items_needed']
        depth = 1

    # user_id = serializers.IntegerField(write_only=True)