from django.contrib import admin
from .models import Genre, Game

admin.site.register(Genre)


class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'genre', 'poster_tag', 'release_date',
                    'rating', 'developer', 'publisher')


admin.site.register(Game, GameAdmin)
