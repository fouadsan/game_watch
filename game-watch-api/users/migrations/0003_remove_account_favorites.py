# Generated by Django 4.0 on 2022-01-03 14:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_account_favorites'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='favorites',
        ),
    ]