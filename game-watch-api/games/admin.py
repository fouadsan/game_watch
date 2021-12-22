from django.contrib import admin
from .models import Genre, Game, GameDetail

admin.site.register(Genre)


class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'genre', 'poster_tag')


admin.site.register(Game, GameAdmin)


class GameDetailAdmin(admin.ModelAdmin):
    list_display = ('game_id', 'image_tag', 'description', 'release_date',
                    'rating', 'developer', 'publisher')


admin.site.register(GameDetail, GameDetailAdmin)
