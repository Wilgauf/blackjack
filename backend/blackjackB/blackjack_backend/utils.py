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

    if check_hand(dealer_hand) == 'blackjack':
        blackjack = 'D'


    request.data.update({
        'deck_id': deck_id,
        'player_hand': player_hand,
        'dealer_hand': dealer_hand,
        'player_chips': player_chips
    })

    if blackjack:
        request.data.update(
            'blackjack': blackjack,
        )
    return request


#parses and computes value of given hand. Will return the hand value as <int>. 
def check_hand(cards):
    card_values = []
    hand_value = 0
    for _, card in enumerate(cards):
        if card[0] == 'A' and hand_value <= 10:
            hand_value += 1
        hand_value += card_key[card[0]]
    
    return hand_value

#draws new card from deck and returns updated hand
def draw_add(deck_id, curr_hand):
    new_card = draw_card(deck_id)
    new_hand = curr_hand.append(new_card[0])
    return new_hand

#computes dealer's turn after player stays and returns updated game state data
def player_stay(dealer_hand, player_hand, deck_id):
    update_data = {}
    curr_d_hand = dealer_hand
    player_value = check_hand(player_hand)
    dealer_value = check_hand(curr_d_hand)

    while dealer_value <= 16:
        curr_d_hand = draw_add(deck_id, curr_d_hand)
        dealer_value = check_hand(curr_d_hand)
    
    update_data['dealer_hand'] = curr_d_hand

    if dealer_value <= 21:
        if dealer_value == 21:
            update_data['blackjack'] = 'D'
        elif dealer_value > player_value and player_value <= 21:
            update_data['hand_winner'] = 'D'
        else:
            update_data['hand_winner'] = 'P'
    else:
        update_data['dealer_bust'] = True
        
    

    


        
        


