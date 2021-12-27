from rest_framework import generics
from rest_framework import filters

from .models import Game, GameDetail
from .serializers import GameSerializer, GameDetailSerializer


class GameList(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    filterset_fields = ['genre', 'is_cracked']
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

    # example filtering: http://example.com/api/products?category=clothing&in_stock=True

    # search_fields = ['^name']
    # example search: http://example.com/api/users?search=russell]


class GameDetail(generics.RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
    lookup_field = "slug"
    
    




