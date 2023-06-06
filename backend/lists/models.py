from django.db import models
from authentication.models import User
# Create your models here.

class List (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.CharField(max_length=255)
    items_needed = models.IntegerField()



    def __str__(self):
        return f"{self.user}, {self.items}"
    # this show you the name in the admin center nothing more.