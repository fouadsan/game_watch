from django.db.models import query
from rest_framework import generics, serializers

from .models import Game, GameDetail
from .serializers import GameSerializer, GameDetailSerializer


class GameList(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class GameDetail(generics.RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
