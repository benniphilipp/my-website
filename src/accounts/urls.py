from django.urls import path
from .views import RegisterView, CustomLoginView, ResetPasswordView, UserProfileView, dashboard

from django.contrib.auth import views as auth_views
from accounts.forms import LoginForm

from django.contrib.auth import views as auth_views

app_name = 'accounts'

urlpatterns = [
    path('', CustomLoginView.as_view(redirect_authenticated_user=True, template_name='accounts/login.html', authentication_form=LoginForm), name='login'),
    path('dashboard/', dashboard, name='dashboard'),
    path('register/', RegisterView.as_view(), name='users-register'),
    path('profile/<pk>/', UserProfileView.as_view(), name='user-profile'),
    path('logout/', auth_views.LogoutView.as_view(template_name='accounts/logout.html'), name='logout'),
    path('password-reset/', ResetPasswordView.as_view(), name='password_reset'),
    path('password-reset-confirm/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name='user/password_reset_confirm.html'), name='password_reset_confirm'),
]