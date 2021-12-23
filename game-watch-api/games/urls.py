from django.urls import path

from .views import GameList, GameDetail, WebPosterList


urlpatterns = [
    path('', GameList.as_view(), name="games"),
    path('<str:pk>/', GameDetail.as_view(), name='game-detail'),
    path('web/posters/', WebPosterList.as_view(), name='web-posters'),
]
