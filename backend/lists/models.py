from django.db import models

# Create your models here.

class List (models.Model):
    items = models.CharField(max_length=255)
    items_needed = models.IntegerField()