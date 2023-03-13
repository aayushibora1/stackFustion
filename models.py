from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=15)


