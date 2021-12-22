from rest_framework import generics, serializers

from .models import Game
from .serializers import GameSerializer


class GameList(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
