from django.urls import path
from .views import CustomerListView, LoadCustomerFormView, CustomerUpdateAjaxView, LoadCampaignFormView, SaveCampaignView, CustomerCreateAjaxView, customer_update_ajax, CustomerListJsonView

app_name = 'customer'

urlpatterns = [
    path('customers/', CustomerListView.as_view(), name='customer-list'),
    path('customers/form-load/', LoadCustomerFormView.as_view(), name='customer-load-form'),
    path('customers/create/', CustomerCreateAjaxView.as_view(), name='create_customer_ajax'),
    path('load_campaign_form/', LoadCampaignFormView.as_view(), name='load_campaign_form'),
    path('customers/json/', CustomerListJsonView.as_view(), name='customer-list-json'),
    path('save_campaign/', SaveCampaignView.as_view(), name='save_campaign'),
    path('update/<int:pk>/', customer_update_ajax, name='update_ajax'),
    path('customers/<int:pk>/update/', CustomerUpdateAjaxView.as_view(), name='update_customer_ajax'),
]