from django.db import models

# Create your models here.


class Budget(models.Model):
    social_class = models.CharField(max_length=255)
    def __str__(self):
        return f"{self.social_class}"