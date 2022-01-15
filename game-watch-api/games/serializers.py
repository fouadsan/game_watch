from django.db.models import fields
from rest_framework import serializers
from .models import Genre, Platform, Game, Mode, Engine, Screenshot,  Artwork, PlayerPerspective, Theme \
    # UserGame


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'genre', 'name', 'poster', 'platforms', 'release_date', 'is_cracked',
                  'is_popular')


class ModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mode
        fields = ('name', )


class GameEnginesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = ('name', )


class ScreenshotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screenshot
        fields = ('id', 'image')


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = ('id', 'image')


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = ('name', )


class PerspectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerPerspective
        fields = ('name', )


class GameDetailSerializer(serializers.ModelSerializer):
    game_modes = ModeSerializer(read_only=True, many=True)
    game_engines = GameEnginesSerializer(read_only=True, many=True)
    player_perspective = PerspectiveSerializer(read_only=True, many=True)
    themes = ThemeSerializer(read_only=True, many=True)
    screenshots = ScreenshotSerializer(read_only=True, many=True)
    artworks = ArtworkSerializer(read_only=True, many=True)

    class Meta:
        model = Game
        fields = ('id', 'genre', 'name', 'poster', 'platforms', 'release_date', 'is_cracked',
                  'description', 'rating', 'developer', 'publisher', 'game_modes', 'game_engines',
                  'player_perspective', 'themes', 'storyline', 'screenshots', 'artworks')


# class UserGameSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserGame
#         fields = ('user', 'favorite_games')
