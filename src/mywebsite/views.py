from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')

#impressum
def impressum(request):
    return render(request, 'impressum.html')

#datenschutz
def datenschutz(request):
    return render(request, 'datenschutz.html')

def dashboard(request):
    return render(request, 'dashboard.html')