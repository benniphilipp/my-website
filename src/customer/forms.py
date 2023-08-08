from django import forms

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

# Modles Import
from .models import WonCampaignsClass, CustomerClass

class CustomerForm(forms.ModelForm):
    class Meta:
        model = CustomerClass
        fields = ['first_name', 'last_name', 'gender', 'email', 'street_address', 'postal_code',  'website', 'city', 'country', 'website', 'phone_number', 'customer', 'won_campaigns', 'notes', 'platform', 'social_media']
        
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.helper = FormHelper()
            self.helper.form_method = 'post'
            self.helper.add_input(Submit('submit', 'Speichern'))


class WonCampaignsForm(forms.ModelForm):
    class Meta:
        model = WonCampaignsClass
        fields = ['campaign_name']
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Create'))