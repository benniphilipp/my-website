# Glossar
    - Models Glossar

# Pipeline
    - Models Pipline

# Accounts
    - Models Accounts
 
# Aktivitäten
    - Models Aktivitäten

# Kundendaten --> customer


    # WonCampaignsClass Model
    Das WonCampaignsClass Modell ermöglicht die Verfolgung der gewonnenen Kampagnen eines Kunden. 
    Jede Instanz dieses Modells speichert den Namen der Kampagne und das Datum, an dem sie hinzugefügt wurde.

    Felder
    customer: Ein Verweis auf den zugehörigen Kunden (ForeignKey).
    campaign_name: Der Name der gewonnenen Kampagne.
    added_date: Das Datum, an dem die Kampagne hinzugefügt wurde.


    # CustomerClass Model
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


    # CustomerHistory Modul
    Das CustomerHistory Modul ermöglicht die Verfolgung von Änderungen am CustomerClass Modell. 
    Es speichert die alten und neuen Werte der geänderten Felder sowie das Datum der Änderung. 
    Dieses Modul ermöglicht eine detaillierte Verfolgung von Kundenänderungen im Laufe der Zeit.

    Funktionen
    track_change(instance, old_values, new_values, changed_fields): Eine Funktion zum Hinzufügen einer Änderung zur 
    Historie. Sie erfasst die Instanz, die alten und neuen Werte der geänderten Felder sowie eine Liste der geänderten Felder.
    Mit diesen Modellen und der CustomerHistory Funktion können Sie Kundeninformationen und gewonnene Kampagnen 
    verfolgen und Änderungen an den Kundendaten genau dokumentieren. Dies ermöglicht eine umfassende Verwaltung Ihrer 
    Kundenbeziehungen und gewonnenen Kampagnen.

    

# Ip Trecking Analyse
    - Models IP Tracking

# Formulare
    - Models Formulare

# My-Website
    - Models

# User

    Ben
    ben@web.de


# Django CMD

    python3 manage.py makemigrations && python3 manage.py migrate

    python manage.py runserver

    python manage.py collectstatic
    python manage.py createsuperuser

    python manage.py startapp

# ENV

    . env/bin/activate

# Github

    - Branrch
    git branch --list
    git branch _name
    git checkout _name

    - Push
    git add .
    git commit -m '_text'
    git push origin customer

# Install

    bootstrap@5.0.1

# NPM RUN

'npm run watch'

'npm run build'

# Install

https://www.npmjs.com/package/bootstrap

'npm i bootstrap'

https://www.npmjs.com/package/npm-watch

'npm i npm-watch'

https://www.npmjs.com/package/font-awesome

'npm i font-awesome'

https://www.npmjs.com/package/bootstrap/v/5.0.1

'npm i bootstrap@5.0.1'


