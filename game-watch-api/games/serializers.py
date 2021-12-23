from rest_framework import serializers
from .models import Game, GameDetail, WebPoster


class WebPosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebPoster
        fields = ('id', 'web_image')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = (
            'id', 'genre', 'name', 'poster'
        )


class GameDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameDetail
        fields = (
            'game', 'image', 'description', 'release_date', 'rating', 'developer', 'publisher'
        )
