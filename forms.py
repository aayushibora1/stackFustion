from django import forms
from .models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('name', 'date_of_birth', 'email', 'phone_number')
        widgets = {
            'date_of_birth': forms.DateInput(attrs={'type': 'date'})
        }
