from django.contrib import admin
from .models import Genre, Game, GameDetail

admin.site.register(Genre)

class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'genre', 'poster_tag', 'platform', 'release_date', 'is_cracked')


admin.site.register(Game, GameAdmin)


class GameDetailAdmin(admin.ModelAdmin):
    list_display = ('game', 'image_tag', 'description', 'rating', 'developer', 'publisher')


admin.site.register(GameDetail, GameDetailAdmin)
