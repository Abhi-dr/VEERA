from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from .models import SOSAlert

# ==================================== YOLO ====================================

def cctv(request):
    return render(request, "dashboard/cctv.html")