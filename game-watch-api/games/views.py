from django.http import request
from rest_framework import generics
from rest_framework import pagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes

from .models import Genre, Game
from .serializers import GenreSerializer, GameSerializer, GameDetailSerializer


class UserGamePermission(permissions.BasePermission):
    message = "Editing favorites is restricted to the owner only"

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_authenticated


class GenreList(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class GameList(generics.ListAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    pagination_class = pagination.LimitOffsetPagination
    # https://api.example.org/accounts/?limit=100&offset=400
    page_size = 1
    filterset_fields = ['id', 'genre', 'platforms',
                        'release_date', 'is_cracked', 'is_popular']
    filter_backends = [DjangoFilterBackend,
                       filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['^name']
    ordering_fields = ['release_date, rating']
    ordering = ['release_date']
    # ordering example http://example.com/api/users?ordering=-username

    # Multiple orderings may also be specified:
    # http://example.com/api/users?ordering=account,username

    # example filtering: http://example.com/api/products?category=clothing&in_stock=True

    # search_fields = ['^name']
    # example search: http://example.com/api/users?search=russell]

    def get_queryset(self):
        queryset = Game.objects.all()
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        if start_date and end_date:
            queryset = queryset.filter(
                release_date__range=[start_date, end_date]
            )

        return queryset


class GameDetail(generics.RetrieveUpdateAPIView, UserGamePermission):
    permission_classes = [UserGamePermission]
    queryset = Game.objects.all()
    serializer_class = GameDetailSerializer

    def patch(self, request, *args, **kwargs):
        if request.user not in self.get_object().users.all():
            self.get_object().users.add(request.user.id)
            return Response({'detail': 'User added to game'}, status=status.HTTP_200_OK)
        self.get_object().users.remove(request.user.id)
        return Response({'detail': 'User removed from game'}, status=status.HTTP_200_OK)
