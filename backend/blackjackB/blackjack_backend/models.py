from django.db import models

# Create your models here.
class Game(models.Model):
    # player = models.ForeignKey(User, on_delete=models.CASCADE, related_name='games')
    player_bet = models.IntegerField(5)
    player_hand = models.CharField(max_length=64)
    dealer_hand = models.CharField(max_length=64)
    player_break = models.BooleanField(default=False)
    dealer_break = models.BooleanField(default=False)
    player_chips = models.IntegerField(5)
    active = models.BooleanField(default=True)
