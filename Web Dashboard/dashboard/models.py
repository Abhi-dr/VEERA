from django.db import models
from django.utils import timezone

class SOSAlert(models.Model):
    message = models.CharField(max_length=255)
    
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField() # has to be removed
    
    latitude = models.FloatField()
    longitude = models.FloatField()
    
    
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.message} at {self.timestamp}"


class DangerZones(models.Model):
    area_name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    cases = models.IntegerField()
    
    def get_total_no_of_cases(self):
        return self.cases

    def increase_case(self):
        self.cases += 1