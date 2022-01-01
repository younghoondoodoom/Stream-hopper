from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        exclude = ('register_at',)
        
class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        exclude = ('register_at',)
