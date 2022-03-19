from django.contrib import admin
from .models import Genre, Platform, Screenshot, Artwork, Mode, PlayerPerspective, Engine, Theme, Game

admin.site.register(Genre)
admin.site.register(Platform)
admin.site.register(Mode)
admin.site.register(PlayerPerspective)
admin.site.register(Engine)
admin.site.register(Theme)
admin.site.register(Screenshot)
admin.site.register(Artwork)


class GameAdmin(admin.ModelAdmin):
    fields = ('name', 'genre', 'poster',
              'platforms', 'is_popular', 'description', 'developer', 'publisher', 'game_modes', 'game_engines', 'player_perspective', 'themes', 'storyline', 'screenshots', 'artworks')

    list_display = ('name', 'id', 'genre', 'poster_tag',
                    'release_date', 'is_released')

    # to be continue


admin.site.register(Game, GameAdmin)
