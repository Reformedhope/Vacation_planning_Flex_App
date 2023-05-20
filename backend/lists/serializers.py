from rest_framework import serializers
from.models import List

class ListSerializer(serializers.ModelSerializer):
    class meta:
        model = List
        fields = [ 'id', 'items', 'items_needed']