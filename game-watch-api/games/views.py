from rest_framework import generics

from .models import Game, GameDetail, WebPoster
from .serializers import GameSerializer, GameDetailSerializer, WebPosterSerializer


class GameList(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class GameDetail(generics.RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer


class WebPosterList(generics.ListAPIView):
    queryset = WebPoster.objects.all()
    serializer_class = WebPosterSerializer





