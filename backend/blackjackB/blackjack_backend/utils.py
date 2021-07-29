from .api_calls import create_a_deck, draw_card

"""
Game Logic helper functions will go here
"""

card_key = {
    'K':10,
    'Q':10,
    'J':10,
    '1':10,
    'A':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,

}

#expects 'player_bet' is in request from frontend
def create_new_game(request):
    deck_setup = draw_card('new', 2)
    deck_id = deck_setup['deck_id']
    player_hand = deck_setup['cards']
    dealer_hand = draw_card(deck_id, 2)
    player_bet = int(request.data['player_bet'])
    player_chips = 1000 - player_bet

    if check_hand(player_hand) == 'blackjack':
        blackjack = 'P'

    request.data.update({
        'deck_id': deck_id,
        'player_hand': player_hand,
        'dealer_hand': dealer_hand,
        'player_chips': player_chips
    })
    return request
#parses and computes value of given hand. Will return 'blackjack', 'bust', or the hand value. 
def check_hand(cards):
    card_values = []
    for i, card in enumerate(sorted(cards, reverse=True)):
        if i == 0 and card[0] == 'A':
            card_values.append(11)
        card_values.append(card_key[card[0]])
    hand_value = sum(card_values)
    if hand_value > 21:
        return 'bust'
    elif hand_value == 21:
        return 'blackjack'
    
    return hand_value
        
        


