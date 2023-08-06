from django.urls import path
from .views import home, datenschutz, impressum

app_name = 'mywebsite'

urlpatterns = [
    path('', home, name='users-home'),
    path('datenschutz/', datenschutz, name='datenschutz'),
    path('impressum/', impressum, name='impressum'),
]