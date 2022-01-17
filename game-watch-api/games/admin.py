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
    list_display = ('name', 'id', 'genre', 'poster_tag',
                    'release_date', 'is_cracked')


admin.site.register(Game, GameAdmin)
