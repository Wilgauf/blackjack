# blackjackB
## BlackJack backend

### API Documentation:

All game logic is handled on the backend by helperfunctions in utils.py

Game Endpoints:

All game endoints return the current game state after game logic has been handled:


Example Response:
```
{
  'id' : 15
  'player' : 3
  'deck_id : 'glq3zirk26hu'
  'player_bet' 100
  'player_hand': ['9H', AC']
  'p_hand_val' : 20
  'dealer_hand' : ['QD', '9D']
  'd_hand_val' : 19
  'player_bust' : False
  'dealer_bust' : False
  'player_chips' : 900
  'blackjack' : ''
  'hand_winner' : 'P'
  'payout' : 200
  'active' :  True
}
```


- api/new_game/

  method: 'POST'

  body:
  ```
  {
    'player_bet' : 100
  }
  ```

- api/play/<int:game_id>/hit/

  method: 'PATCH'

- api/play/<int:game_id>/stay/

  method: 'PATCH'

- api/play/<int:game_id>/bet/

  method: 'PATCH'

  body:
  ```
  {
    'player_bet' : 100
  }
  ```