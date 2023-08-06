from django.shortcuts import render
from django.views.generic import CreateView
from django.views.generic import ListView
from django.views.generic import UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin

from .forms import CustomerForm

from .models import CustomerClass
# Create your views here.

class CustomerListView(LoginRequiredMixin, ListView):
    model = CustomerClass
    template_name = 'customer_list.html'
    context_object_name = 'customers'
    
class CustomerCreateView(LoginRequiredMixin, CreateView):
    model = CustomerClass
    form_class = CustomerForm
    template_name = 'customer_form.html'
    success_url = '/customers/'  # Die URL, zu der der Benutzer nach erfolgreicher Erstellung eines Kunden weitergeleitet wird

class CustomerUpdateView(LoginRequiredMixin, UpdateView):
    model = CustomerClass
    form_class = CustomerForm
    template_name = 'customer_form.html'
    success_url = '/customers/'  # Die URL, zu der der Benutzer nach erfolgreicher Aktualisierung eines Kunden weitergeleitet wird