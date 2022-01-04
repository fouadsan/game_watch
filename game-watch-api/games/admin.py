from django.contrib import admin
from .models import Genre, Platform, Game, UserGame

admin.site.register(Genre)

admin.site.register(Platform)


class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'genre', 'poster_tag',
                    'release_date', 'is_cracked')


admin.site.register(Game, GameAdmin)

admin.site.register(UserGame)
