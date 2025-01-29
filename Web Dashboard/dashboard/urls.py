from django.urls import path

from . import views, apis, surveillance

urlpatterns = [
    path("", views.dashboard, name="dashboard"),
    path("our_volunteers", views.our_volunteers, name="our_volunteers"),
    path("danger_zones", views.danger_zones, name="danger_zones"),
    path("cctv", surveillance.cctv, name="cctv"),
    
    path('api/sos-call/', views.sos_call, name='sos_call'),
    
    # =========================== API CALLS ===========================
    
    path('api/sos-calls/', apis.get_sos_calls, name='get_sos_calls'),
    path("api/get_volunteers_number", apis.get_volunteers_number, name="get_volunteers_number"),
    path("api/get_users_number", apis.get_users_number, name="get_users_number"),

    path('api/fetch_sos_alert/', apis.fetch_sos_alert, name='fetch_sos_alert'),

]

