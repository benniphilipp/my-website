from django.shortcuts import render
from django.views.generic import CreateView
from django.views.generic import ListView
from django.views.generic import UpdateView
from django.views.generic.edit import FormView
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse

from .forms import CustomerForm
from .models import CustomerClass


from django.http import JsonResponse
from django.template.loader import render_to_string
from django.views.decorators.http import require_POST
from .forms import WonCampaignsForm


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

    
class LoadCampaignFormView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        context = {'won_campaigns_form': WonCampaignsForm()}
        form_html = render_to_string('campaign_form.html', context, request=request)
        return JsonResponse({'form_html': form_html})

    
class SaveCampaignView(View):
    def post(self, request, *args, **kwargs):
        form = WonCampaignsForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    

