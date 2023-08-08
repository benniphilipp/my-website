from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.views.generic import CreateView
from django.views.generic import ListView
from django.views.generic import UpdateView
from django.views.generic.edit import FormView
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.urls import reverse_lazy

from .forms import CustomerForm
from .models import CustomerClass


from django.http import JsonResponse
from django.template.loader import render_to_string
from django.views.decorators.http import require_POST
from .forms import WonCampaignsForm



# Customer List View
class CustomerListView(LoginRequiredMixin, ListView):
    model = CustomerClass
    template_name = 'customer_list.html'
    context_object_name = 'customers'


class CustomerListJsonView(ListView):
    model = CustomerClass

    def render_to_response(self, context, **response_kwargs):
        customers = list(self.get_queryset().values())
        return JsonResponse(customers, safe=False)


# Customer Form View
class LoadCustomerFormView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        context = {'customer_form': CustomerForm()}
        form = render_to_string('customer_form.html', context, request=request)
        return JsonResponse({'form': form})



# Customer Form Save
class CustomerCreateAjaxView(LoginRequiredMixin, View):    
    def post(self, request, *args, **kwargs):
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    


# Campaign form View
class LoadCampaignFormView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        context = {'won_campaigns_form': WonCampaignsForm()}
        form_html = render_to_string('campaign_form.html', context, request=request)
        return JsonResponse({'form_html': form_html})



# Campaign form Save
class SaveCampaignView(View):
    def post(self, request, *args, **kwargs):
        form = WonCampaignsForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    


# Customer Update Form View
class CustomerUpdateAjaxView(LoginRequiredMixin, View):
    def get(self, request, pk, *args, **kwargs):
        customer = get_object_or_404(CustomerClass, pk=pk)
        form = CustomerForm(instance=customer)
        context = {'form': form}
        form_html = render_to_string('customer_update_form.html', context, request=request)
        return JsonResponse({'form_html': form_html})



# Customer Update Form Save
def customer_update_ajax(request, pk):
    if request.method == 'POST':
        customer = get_object_or_404(CustomerClass, pk=pk)
        form = CustomerForm(request.POST, instance=customer)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
        
        

