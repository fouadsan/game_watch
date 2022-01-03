from rest_framework import generics
from rest_framework import pagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import permissions

from rest_framework.response import Response

from .models import Genre, Game, GameDetail, UserGame
from .serializers import GenreSerializer, GameSerializer, GameDetailSerializer, UserGameSerializer


class UserGamePermission(permissions.BasePermission):
    message = "Editing posts is restricted to the author only"

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user


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
    filterset_fields = ['genre', 'platform', 'is_cracked', 'release_date']
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['^name']
    ordering_fields = ['release_date, rating']
    ordering = ['release_date']
    # ordering example http://example.com/api/users?ordering=-username

    # Multiple orderings may also be specified:
    # http://example.com/api/users?ordering=account,username

    # example filtering: http://example.com/api/products?category=clothing&in_stock=True

    # search_fields = ['^name']
    # example search: http://example.com/api/users?search=russell]

    def list(self, request):
        queryset = self.get_queryset()
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        
        # filter by release_date range
        # example http://127.0.0.1:8000/api/games/?start_date=2021-01-02&end_date=2022-01-01
        if start_date and end_date:
            print(start_date)
            queryset = queryset.filter(release_date__range=[start_date, end_date])
            serializer = GameSerializer(queryset, many=True)
            return Response(serializer.data)
   


class GameDetail(generics.RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
    lookup_field = "slug"


class CreateUserGame(generics.CreateAPIView):
    queryset = UserGame.objects.all()
    serializer_class = UserGameSerializer


# class UpdateUserGame(generics.RetrieveUpdateDestroyAPIView, UserGamePermission):
#     # permission_classes = [UserGamePermission]
#     queryset = UserGame.objects.all()
#     serializer_class = UserGameSerializer

#     lookup_field = "user"
#     def perform_update(self, serializer):
#         serializer.save(user=self.request.user)
