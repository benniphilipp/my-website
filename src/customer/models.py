from django.db import models
from accounts.models import CustomUser

# Create your models here.
class CustomerClass(models.Model):
    
    GENDER_CHOICES = (
        ('M', 'Herr'),
        ('F', 'Frau'),
    )
    
    SOCIAL_MEDIA_CHOICES = (
        ('FB', 'Facebook'),
        ('TW', 'Twitter'),
        ('IG', 'Instagram'),
        ('LI', 'LinkedIn'),
        ('YT', 'YouTube'),
    )

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    street_address = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=10)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    website = models.URLField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    platform = models.CharField(max_length=50)
    social_media = models.CharField(max_length=2, choices=SOCIAL_MEDIA_CHOICES, blank=True)
    won_campaigns = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    notes = models.TextField(blank=True)
    #Pipeline
    
#class WonCampaignsClass(models.Modal):
    #pass
