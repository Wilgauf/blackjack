from django.urls import path, include
from . import views

urlpatterns = [
    path('new_game/' , views.new_game, name='new'),
    path('play/<int:game_id>/hit/', views.hit, name='hit'),
    path('play/<int:game_id>/stay/', views.stay, name='stay'),
    path('play/<int:game_id>/bet/', views.bet, name='bet'),
]
