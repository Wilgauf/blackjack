from .api_calls import create_a_deck, draw_card

"""
Game Logic helper functions will go here
"""

card_key = {
    ''
}

#expects 'player_bet' is in request from frontend
def create_new_game(request):
    deck_setup = draw_card('new', 2)
    deck_id = deck_setup['deck_id']
    player_hand = deck_setup['cards']
    dealer_hand = draw_card(deck_id, 2)
    player_bet = int(request.data['player_bet'])
    player_chips = 1000 - player_bet

    request.data.update({
        'deck_id': deck_id,
        'player_hand': player_hand,
        'dealer_hand': dealer_hand,
        'player_chips': player_chips
    })
    return request

