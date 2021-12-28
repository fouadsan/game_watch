from rest_framework import generics
from rest_framework import pagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import permissions

from .models import Genre, Game, GameDetail
from .serializers import GenreSerializer, GameSerializer, GameDetailSerializer


class GenreList(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class GameList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    pagination_class = pagination.LimitOffsetPagination
    # https://api.example.org/accounts/?limit=100&offset=400
    page_size = 1
    filterset_fields = ['genre', 'platform', 'is_cracked']
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['^name']

    # example filtering: http://example.com/api/products?category=clothing&in_stock=True

    # search_fields = ['^name']
    # example search: http://example.com/api/users?search=russell]


class GameDetail(generics.RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
    lookup_field = "slug"
