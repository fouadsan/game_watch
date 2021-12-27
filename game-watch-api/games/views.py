from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import permissions

from .models import Game, GameDetail
from .serializers import GameSerializer, GameDetailSerializer


class GameList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    filterset_fields = ['genre', 'is_cracked']
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['^name']

    # example filtering: http://example.com/api/products?category=clothing&in_stock=True

    # search_fields = ['^name']
    # example search: http://example.com/api/users?search=russell]


class GameDetail(generics.RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
    lookup_field = "slug"
    
    




