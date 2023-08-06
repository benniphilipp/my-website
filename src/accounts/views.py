from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, redirect
from django.contrib import messages
from django.views import View
from django.contrib.auth.views import LoginView

from django.contrib.auth.views import PasswordResetView
from django.contrib.messages.views import SuccessMessageMixin

from django.urls import reverse_lazy
from .models import CustomUser
from .forms import RegisterForm, LoginForm

from django.views.generic.detail import DetailView
from django.contrib.auth.decorators import login_required


@login_required(login_url="/login/")
def dashboard(request):
    return render(request, 'dashboard.html')

# Create your views here.
class UserProfileView(DetailView):
    model = CustomUser
    slug_field = "id"
    template_name = "userprofile.html"

#https://dev.to/earthcomfy/creating-a-django-registration-login-app-part-ii-3k6 #https://github.com/earthcomfy/Django-registration-and-login-system/tree/master/users
class RegisterView(View):
    form_class = RegisterForm
    initial = {'key': 'value'}
    template_name = 'accounts/register.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            form.save()

            return redirect(to='/accounts/dashboard/')

        return render(request, self.template_name, {'form': form})
    
    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(to='/')

        return super(RegisterView, self).dispatch(request, *args, **kwargs)
    
# Class based view that extends from the built in login view to add a remember me functionality
class CustomLoginView(LoginView):
    form_class = LoginForm

    def form_valid(self, form):
        remember_me = form.cleaned_data.get('remember_me')

        if not remember_me:
            self.request.session.set_expiry(0)
            self.request.session.modified = True

        return super(CustomLoginView, self).form_valid(form)

# Passwort Reset
class ResetPasswordView(SuccessMessageMixin, PasswordResetView):
    template_name = 'user/password_reset.html'
    email_template_name = 'users/password_reset_email.html'
    subject_template_name = 'users/password_reset_subject'
    success_message = "We've emailed you instructions for setting your password, " \
                      "if an account exists with the email you entered. You should receive them shortly." \
                      " If you don't receive an email, " \
                      "please make sure you've entered the address you registered with, and check your spam folder."
    success_url = reverse_lazy('users-home')
    
