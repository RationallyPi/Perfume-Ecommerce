from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # AbstractUser already has username, first_name, last_name, email, password
    pass  # Add only your custom fields here