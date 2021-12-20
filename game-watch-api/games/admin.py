from django.contrib import admin
from .models import Genre, Game 

admin.site.register(Genre)

class GameAdmin(admin.ModelAdmin):
    list_display = ('genre', 'name', 'image_tag', 'description', 'release_date', 'rating', 'developer', 'publisher')

admin.site.register(Game, GameAdmin)