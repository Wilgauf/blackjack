from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id',  
        'deck_id',
        'player_bet',
        'player_hand',
        'dealer_hand',
        'player_bust',
        'dealer_bust',
        'player_chips',
        'blackjack',
        'hand_winner',
        'active'
        ]