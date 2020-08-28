import os
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = "Initialize Admin User"

    def handle(self, *args, **options):
        try:
            username = os.getenv("ADMINUSERNAME")
            email = os.getenv("ADMINEMAIL")
            password = os.getenv("ADMINPASS")
            print('Creating account for %s (%s)' % (username, email))
            admin = User.objects.create_superuser(email=email, username=username, password=password)
            admin.is_active = True
            admin.is_admin = True
            admin.save()
        except Exception as e:
            print(e)
