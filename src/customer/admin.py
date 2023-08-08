from django.contrib import admin

from .models import CustomerClass, CustomerHistory, WonCampaignsClass

admin.site.register(CustomerClass)
admin.site.register(CustomerHistory)
admin.site.register(WonCampaignsClass)
