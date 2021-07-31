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

# MAP = {
#     'HIT': player_hit
# }

#Creates intial game state by filling necessary info. Expects 'player_bet' is in request from frontend
def create_new_game(request):
    update_data = {}
    deck_setup = draw_card('new', 2)
    deck_id = deck_setup['deck_id']
    update_data['deck_id'] = deck_setup['deck_id']
    update_data['player_hand'] = deck_setup['cards']
    update_data['dealer_hand'] = draw_card(deck_id, 2)
    update_data['player_bet'] = int(request.data['player_bet'])
    update_data['player_chips'] = 1000 - update_data['player_bet']
    

    if check_hand(update_data['player_hand']) == 'blackjack':
        update_data['blackjack'] = 'P'

    if check_hand(update_data['dealer_hand']) == 'blackjack':
        update_data['blackjack'] = 'D'


    request.data.update(update_data)
    return request


#parses and computes value of given hand. Will return the hand value as <int>. 
def check_hand(cards):
    card_values = []
    hand_value = 0
    for _, card in enumerate(cards):
        if card[0] == 'A' and hand_value <= 10:
            hand_value += 11
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
    
    #betting payout logic might be needed here

    return update_data
    
#logic for player hitting
def player_hit(deck_id, player_hand):
    update_data = {}
    new_hand = draw_add(deck_id, player_hand)
    hand_value = check_hand(new_hand)

    if hand_value == 21:
        update_data['blackjack'] = 'P'
        update_data['hand_winner'] = 'P'
    elif hand_value < 21:
        update_data['player_hand'] = new_hand
    else:
        update_data['player_bust'] = True
        update_data['hand_winner'] = 'D'

    #add betting/payout logic
    
    return update_data


# def new_round(deck_id)