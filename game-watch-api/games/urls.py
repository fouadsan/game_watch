from django.urls import path

from .views import GenreList, GameList, GameDetail, UpdateUserGame


urlpatterns = [
    path('', GameList.as_view(), name="games"),
    path('genres/', GenreList.as_view(), name="genres"),
    path('<int:pk>/', GameDetail.as_view(), name='game-detail'),
    path('favorites/<int:user>/', UpdateUserGame.as_view(), name='favorites-update'),
]
