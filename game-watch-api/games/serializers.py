from rest_framework import serializers
from .models import Genre, Game, UserGame


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'genre', 'name', 'poster', 'platforms', 'release_date', 'is_cracked',
                  'is_popular', 'image', 'description', 'rating', 'developer', 'publisher')


class UserGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserGame
        fields = ('user', 'favorite_games')
