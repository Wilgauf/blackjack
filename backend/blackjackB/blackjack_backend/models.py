from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

# Create your models here.
class Game(models.Model):
    BLACKJACK = (
        ('P', 'Player'),
        ('D', 'Dealer'),
    )

    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name='games')
    deck_id = models.CharField(max_length=200)
    player_bet = models.IntegerField(3)
    player_hand = ArrayField(models.CharField(max_length=2)) #ArrayFields(CharField(max_length=2))
    p_hand_val = models.IntegerField(2)
    dealer_hand = ArrayField(models.CharField(max_length=2))
    d_hand_val = models.IntegerField(2)
    player_bust = models.BooleanField(default=False)
    dealer_bust = models.BooleanField(default=False)
    player_chips = models.IntegerField(6)
    blackjack = models.CharField(max_length=1, choices=BLACKJACK, blank=True)
    hand_winner = models.CharField(max_length=1, choices=BLACKJACK, blank=True)
    payout = models.IntegerField(6, blank=True)
    active = models.BooleanField(default=True)

