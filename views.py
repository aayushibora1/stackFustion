from django.shortcuts import render
from .forms import UserForm

def user_form(request):
    form = UserForm()
    return render(request, 'user_form.html', {'form': form})


