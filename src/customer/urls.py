from django.urls import path
from .views import CustomerListView, CustomerCreateView, CustomerUpdateView

app_name = 'customer'

urlpatterns = [
    path('customers/', CustomerListView.as_view(), name='customer-list'),
    path('customers/create/', CustomerCreateView.as_view(), name='customer-create'),
    path('customers/<int:pk>/update/', CustomerUpdateView.as_view(), name='customer-update'),
]