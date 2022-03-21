from django.contrib import admin
from admin_interface.models import Theme as Th

from .models import Genre, Platform, Screenshot, Artwork, Mode, PlayerPerspective, Engine, Theme, Game

admin.site.unregister(Th)

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
              'platforms', 'release_date', 'is_popular', 'description', 'rating', 'developer', 'publisher', 'game_modes', 'game_engines', 'player_perspective', 'themes', 'storyline', 'screenshots', 'artworks')

    list_display = ('name', 'id', 'genre', 'poster_tag',
                    'release_date', 'is_released', 'get_users')

    def get_users(self, obj):
        return "\n".join([f'#{u.id}' for u in obj.users.all()])

    get_users.short_description = 'users favorite'


admin.site.register(Game, GameAdmin)
