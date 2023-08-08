from django.urls import path
from .views import CustomerListView, CustomerCreateView, CustomerUpdateView, LoadCampaignFormView, SaveCampaignView

app_name = 'customer'

urlpatterns = [
    path('customers/', CustomerListView.as_view(), name='customer-list'),
    path('customers/create/', CustomerCreateView.as_view(), name='customer-create'),
    path('customers/<int:pk>/update/', CustomerUpdateView.as_view(), name='customer-update'),
    path('load_campaign_form/', LoadCampaignFormView.as_view(), name='load_campaign_form'),
    path('save_campaign/', SaveCampaignView.as_view(), name='save_campaign'),
]