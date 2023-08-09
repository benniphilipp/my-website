from django.db import models
from accounts.models import CustomUser
from model_utils import FieldTracker

from django.db.models.signals import post_save
from django.dispatch import receiver



'''
CustomerClass Model
Das CustomerClass Modell repräsentiert Kundeninformationen und Kontaktdaten. 
Es speichert Details wie Geschlecht, Vorname, Nachname, E-Mail-Adresse, Adresse, Land, 
Telefonnummer, Plattform, soziale Medien und vieles mehr. 
Dieses Modell ermöglicht die Verwaltung von Kundendaten und die Erfassung von gewonnenen Kampagnen.

gender: Das Geschlecht des Kunden.
first_name: Der Vorname des Kunden.
last_name: Der Nachname des Kunden.
email: Die E-Mail-Adresse des Kunden.
street_address: Die Straßenadresse des Kunden.
postal_code: Die Postleitzahl des Kunden.
city: Die Stadt des Kunden.
country: Das Land des Kunden.
website: Die Website-URL des Kunden (optional).
phone_number: Die Telefonnummer des Kunden (optional).
customer: Ein Verweis auf den zugehörigen Benutzer (ForeignKey).
platform: Die Plattform, auf der der Kunde aktiv ist.
social_media: Die bevorzugten sozialen Medien des Kunden.
won_campaigns: Eine Liste der gewonnenen Kampagnen.
created_at: Das Erstellungsdatum des Kunden.
updated_at: Das Datum der letzten Aktualisierung des Kunden.
notes: Notizen und zusätzliche Informationen zum Kunden (optional).
'''


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
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    street_address = models.CharField(max_length=200, blank=True, null=True)
    postal_code = models.CharField(max_length=10, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    platform = models.CharField(max_length=50, blank=True, null=True)
    #social_media = models.CharField(max_length=2, choices=SOCIAL_MEDIA_CHOICES, blank=True)
    won_campaigns = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    notes = models.TextField(blank=True)
    tracker = FieldTracker()
    #Pipeline
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"



'''
WonCampaignsClass Model
Das WonCampaignsClass Modell ermöglicht die Verfolgung der gewonnenen Kampagnen eines Kunden. 
Jede Instanz dieses Modells speichert den Namen der Kampagne und das Datum, an dem sie hinzugefügt wurde.

Felder
customer: Ein Verweis auf den zugehörigen Kunden (ForeignKey).
campaign_name: Der Name der gewonnenen Kampagne.
added_date: Das Datum, an dem die Kampagne hinzugefügt wurde.
'''


class WonCampaignsClass(models.Model):
    campaign_name = models.CharField(max_length=200)
    added_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.campaign_name}"


'''
CustomerHistory Modul
Das CustomerHistory Modul ermöglicht die Verfolgung von Änderungen am CustomerClass Modell. 
Es speichert die alten und neuen Werte der geänderten Felder sowie das Datum der Änderung. 
Dieses Modul ermöglicht eine detaillierte Verfolgung von Kundenänderungen im Laufe der Zeit.

Funktionen
track_change(instance, old_values, new_values, changed_fields): Eine Funktion zum Hinzufügen einer Änderung zur 
Historie. Sie erfasst die Instanz, die alten und neuen Werte der geänderten Felder sowie eine Liste der geänderten Felder.
Mit diesen Modellen und der CustomerHistory Funktion können Sie Kundeninformationen und gewonnene Kampagnen 
verfolgen und Änderungen an den Kundendaten genau dokumentieren. Dies ermöglicht eine umfassende Verwaltung Ihrer 
Kundenbeziehungen und gewonnenen Kampagnen.
'''


class CustomerHistory(models.Model):
    customer = models.ForeignKey('CustomerClass', on_delete=models.CASCADE)
    change_description = models.TextField()
    changed_at = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return f"History for {self.customer} at {self.changed_at}"



@receiver(post_save, sender=CustomerClass)
def customer_class_saved(sender, instance, **kwargs):
    # Prüfen, welche Felder geändert wurden
    changed_fields = instance.tracker.changed()
    
    # Erstellen Sie eine benutzerdefinierte Beschreibung der Änderungen
    custom_field_names = {
        'updated_at': 'Letzte Aktualisierung',
        'last_name': 'Nachname',
        'first_name': 'Vorname',
        'email': 'E-Mail',
        'street_address': 'Straßenadresse',
        'postal_code': 'Postleitzahl',
        'city': 'Stadt',
        'country': 'Land',
        'website': 'Website',
        'phone_number': 'Telefonnummer',
        'platform': 'Plattform',
        'social_media': 'Soziale Medien',
        'won_campaigns': 'Gewonnene Kampagnen',
        'notes': 'Notizen'
    }
    
    change_description = "Es wurden Änderungen an den folgenden Feldern vorgenommen: "
    
    for field in changed_fields:
        if field in custom_field_names:
            change_description += custom_field_names[field] + ", "
        else:
            change_description += field + ", "
    
    change_description = change_description.rstrip(", ")  # Entfernen Sie das letzte Komma und Leerzeichen
    
    # Erstellen Sie eine neue CustomerHistory-Instanz
    history_entry = CustomerHistory.objects.create(customer=instance, change_description=change_description)