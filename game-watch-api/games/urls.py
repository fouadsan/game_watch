from django.urls import path

from .views import GenreList, GameList, GameDetail


urlpatterns = [
    path('', GameList.as_view(), name="games"),
    path('genres/', GenreList.as_view(), name="genres"),
    path('<int:pk>/', GameDetail.as_view(), name='game-detail'),
]
