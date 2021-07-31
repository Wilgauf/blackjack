from django.urls import path, include
from . import views

urlpatterns = [
    path('games/' , views.games, name='games'),
    path('<int:game_id>/', views.games, name='game_play')
]
