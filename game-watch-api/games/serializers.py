from rest_framework import serializers
from .models import Genre, Game, GameDetail


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'genre', 'name', 'poster', 'platform', 'release_date', 'is_cracked')


class GameDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameDetail
        fields = ('game', 'slug', 'image', 'description', 'rating', 'developer', 'publisher')
