from django.urls import path
from .views import home, datenschutz, impressum, dashboard

app_name = 'mywebsite'

urlpatterns = [
    path('', home, name='users-home'),
    path('datenschutz/', datenschutz, name='datenschutz'),
    path('impressum/', impressum, name='impressum'),
    path('dashboard/', dashboard, name='dashboard'),
]