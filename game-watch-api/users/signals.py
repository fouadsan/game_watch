
from django.db.models.signals import post_save
from .models import Account
from django.dispatch import receiver
from games.models import UserGame


@receiver(post_save, sender=Account)
def create_usergame(sender, instance, created, **kwargs):
    if created:
        UserGame.objects.create(user=instance)


@receiver(post_save, sender=UserGame)
def save_usergame(sender, instance, **kwargs):
    instance.user.save()
