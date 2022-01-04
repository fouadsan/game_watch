from django.urls import path

from .views import GenreList, GameList, GameDetail, CreateUserGame, UpdateUserGame


urlpatterns = [
    path('', GameList.as_view(), name="games"),
    path('genres/', GenreList.as_view(), name="genres"),
    path('<int:pk>/', GameDetail.as_view(), name='game-detail'),
    path('favorites/create/', CreateUserGame.as_view(), name='favorites-create'),
    path('favorites/<int:user>/', UpdateUserGame.as_view(), name='favorites-update'),
]
