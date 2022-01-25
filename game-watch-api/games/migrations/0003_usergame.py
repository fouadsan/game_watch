# Generated by Django 4.0 on 2022-01-17 17:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('games', '0002_game_users_alter_mode_name_delete_usergame'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserGame',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('favorite_games', models.ManyToManyField(to='games.Game')),
                ('user', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='users.account')),
            ],
        ),
    ]