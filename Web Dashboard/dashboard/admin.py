from django.contrib import admin
from .models import SOSAlert, DangerZones

admin.site.register(SOSAlert)
admin.site.register(DangerZones)
