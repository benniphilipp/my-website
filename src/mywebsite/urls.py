from django.urls import path
from .views import home

app_name = 'mywebsite'

urlpatterns = [
    path('', home, name='users-home'),
]