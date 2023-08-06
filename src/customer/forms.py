from django import forms
from .models import CustomerClass

class CustomerForm(forms.ModelForm):
    class Meta:
        model = CustomerClass
        fields = ['first_name', 'last_name', 'gender', 'email', 'street_address', 'postal_code',  'website', 'city', 'country', 'website', 'phone_number', 'customer', 'won_campaigns', 'notes', 'platform', 'social_media']
