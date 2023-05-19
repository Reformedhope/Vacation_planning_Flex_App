from django.db import models
from budgets.models import Budget



class Destinations(models.Model):
    name = models.CharField(max_length=255)
    terrain = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    average_summer_temp = models.DecimalField(max_digits=3, decimal_places=1)
    average_winter_temp = models.DecimalField(max_digits=3, decimal_places=1)
    budget_type = models.ForeignKey(Budget, on_delete=models.CASCADE)




