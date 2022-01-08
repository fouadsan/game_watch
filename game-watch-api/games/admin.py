from django.contrib import admin
from .models import Genre, Platform, Mode, PlayerPerspective, Engine, Theme, Game, UserGame

admin.site.register(Genre)
admin.site.register(Platform)
admin.site.register(Mode)
admin.site.register(PlayerPerspective)
admin.site.register(Engine)
admin.site.register(Theme)


class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'genre', 'poster_tag',
                    'release_date', 'is_cracked')


admin.site.register(Game, GameAdmin)

admin.site.register(UserGame)
