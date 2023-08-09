from django import forms

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Row, Field, Column, Submit, HTML

# Modles Import
from .models import WonCampaignsClass, CustomerClass

class CustomerForm(forms.ModelForm):
    class Meta:
        model = CustomerClass
        fields = ['first_name', 'last_name', 'gender', 'email', 'street_address', 'postal_code', 'website', 'city', 'country', 'phone_number', 'customer', 'notes', 'platform']

        labels = {
            'first_name': 'Vorname',
            'last_name': 'Nachname',
            'gender': 'Geschlecht',
            'email': 'E-Mail',
            'street_address': 'Straße',
            'postal_code': 'Postleitzahl',
            'website': 'Website',
            'city': 'Stadt',
            'country': 'Land',
            'phone_number': 'Telefonnummer',
            'notes': 'Notizen',
            # ... und so weiter
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('gender', css_class='col-md-2'),
                Column('first_name', css_class='col-md-5'),
                Column('last_name', css_class='col-md-5'),
                css_class='row'
            ),
            Row(
                Column('phone_number', css_class='col-md-6'),
                Column('email', css_class='col-md-6'),
                css_class='row'
            ),
            Row(
                Column('postal_code', css_class='col-md-2'),
                Column('street_address', css_class='col-md-5'),
                Column('city', css_class='col-md-5'),
                css_class='row'
            ),
            Row(
                Column('country', css_class='col-md-12'),
                css_class='row'
            ),
            Row(
                Column('website', css_class='col-md-6'),
                Column('customer', css_class='col-md-6'),
                css_class='row'
            ),
            Row(
                Column('platform', css_class='col-md-6'),
                css_class='row'
            ),
            Row(
                Field('notes', css_class='col-md-12', rows='3'),
                css_class='row'
            ),
            HTML('<button id="customerForm" class="btn btn-primary mt-3" type="button">Speichern</button>')
        )

class WonCampaignsForm(forms.ModelForm):
    class Meta:
        model = WonCampaignsClass
        fields = ['campaign_name']
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Create'))