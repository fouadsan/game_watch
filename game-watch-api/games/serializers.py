from rest_framework import serializers
from .models import Game, GameDetail


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'genre', 'name', 'poster', 'is_cracked')


class GameDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameDetail
        fields = (
            'game', 'slug', 'image', 'description', 'release_date', 'rating', 'developer', 'publisher'
        )

