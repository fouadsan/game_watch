from django.contrib import admin
from .models import Genre, Game

admin.site.register(Genre)


class GameAdmin(admin.ModelAdmin):
    list_display = ('genre', 'id', 'name', 'image_tag', 'release_date',
                    'rating', 'developer', 'publisher')


admin.site.register(Game, GameAdmin)
