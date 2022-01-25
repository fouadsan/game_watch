# Generated by Django 4.0 on 2022-01-15 19:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('games', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='mode',
            name='name',
            field=models.CharField(choices=[('single-player', 'Single player'), ('multiplayer', 'Multiplayer')], default=1, max_length=20, unique=True),
        ),
        migrations.DeleteModel(
            name='UserGame',
        ),
    ]