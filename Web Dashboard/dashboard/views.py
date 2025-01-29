from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

from .models import SOSAlert, DangerZones


# ====================================== DASHBOARD ======================================

def dashboard(request):
    
    sos_calls = SOSAlert.objects.all().order_by("-timestamp")
    
    parameters = {
        "sos_calls": sos_calls
    }
    
    return render(request, "dashboard/index.html", parameters)

# ====================================== OUR VOLUNTEERS ======================================

def our_volunteers(request):
    return render(request, "dashboard/our_volunteers.html")


# ====================================== DANGER ZONES ======================================

def danger_zones(request):
    
    danger_zones = DangerZones.objects.all()
    
    parameters = {
        "danger_zones": danger_zones
    }
    
    
    return render(request, "dashboard/danger_zones.html", parameters)

# ============================================================================================


@csrf_exempt
def sos_call(request):
    if request.method == 'POST':
            
        try:
            data = json.loads(request.body)
            
            message = data.get("message")
            name = data.get("name")
            phone_number = data.get("phone_number")
            email = data.get("email")
            
            latitude = data.get("latitude")
            longitude = data.get("longitude")
            
        except json.JSONDecodeError:
            # Fallback to form data
            message = request.POST.get("message")
            name = request.POST.get("name")
            phone_number = request.POST.get("phone_number")
            email = request.POST.get("email")
            
            latitude = request.POST.get("latitude")
            longitude = request.POST.get("longitude")
        
        SOSAlert.objects.create(
            message=message,
            name=name,
            phone_number=phone_number,
            email=email,
            latitude=latitude,
            longitude=longitude
            )
        return JsonResponse({
            "status": "success", 
            "message": message,
            "name": name,
            "phone_number": phone_number,
            "email": email,
            "latitude": latitude,
            "longitude": longitude
            })
    
    return JsonResponse({
        "status": "failed", 
        "message": "Invalid request method"
        }, status=400)

