# Generated by Django 4.0 on 2021-12-27 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0003_gamedetail_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gamedetail',
            name='slug',
            field=models.SlugField(max_length=250),
        ),
    ]
