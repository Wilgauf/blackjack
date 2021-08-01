import math
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

#Creates intial game state by filling necessary info. Expects 'player_bet' is in request from frontend
def create_new_game(request):
    data = {}
    deck_setup = draw_card('new', 2)
    deck_id = deck_setup['deck_id']
    data['deck_id'] = deck_setup['deck_id']
    data['player_hand'] = deck_setup['cards']
    data['dealer_hand'] = draw_card(deck_id, 2)
    data['player_bet'] = int(request.data['player_bet'])
    data['player_chips'] = 1000 - data['player_bet']
    
    if check_hand(data['player_hand']) == 21:
        data['blackjack'] = 'P'

    if check_hand(data['dealer_hand']) == 21:
        data['blackjack'] = 'D'

    request.data.update(data)
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
    new_hand = curr_hand
    new_card = draw_card(deck_id)
    new_hand.append(new_card[0])
    return new_hand

#computes dealer's turn after player stays and returns updated game state data
def player_stay(curr_state):
    data = {}
    curr_d_hand = curr_state.dealer_hand
    player_value = check_hand(curr_state.player_hand)
    dealer_value = check_hand(curr_d_hand)

    while dealer_value <= 16:
        curr_d_hand = draw_add(deck_id, curr_d_hand)
        dealer_value = check_hand(curr_d_hand)
    
    data['dealer_hand'] = curr_d_hand

    if dealer_value <= 21:
        if dealer_value == 21:
            data['blackjack'] = 'D'
        elif dealer_value > player_value and player_value <= 21:
            data['hand_winner'] = 'D'
        else:
            data['hand_winner'] = 'P'
            data['player_chips'] = curr_state.player_chips + payout(curr_state.player_bet, 'N')
    else:
        data['dealer_bust'] = True
    
    #betting payout logic might be needed here

    return data
    
#logic for player hitting
def player_hit(curr_state):
    data = {}
    print(curr_state.deck_id, '   ',curr_state.player_hand)
    new_hand = draw_add(curr_state.deck_id, curr_state.player_hand)
    print(new_hand)
    hand_value = check_hand(new_hand)

    if hand_value == 21:
        data['blackjack'] = 'P'
        data['hand_winner'] = 'P'
        data['player_chips'] = curr_state.player_chips + payout(curr_state.player_bet, 'BJ')
    elif hand_value < 21:
        data['player_hand'] = new_hand
    else:
        data['player_bust'] = True
        data['hand_winner'] = 'D'

    #add betting/payout logic
    print(new_hand)
    return data

#calculates chip payout for player. returns <int>winnings to add to chip count
def payout(bet, win_type):
    rates = {
        'BJ': 1.5,
        'N': 1
    }
    winnings = bet * rates[win_type]
    return math.floor(winnings)

#logic for new hand. returns player + dealer hands and blackjack winner (if exists)
def new_bet(curr_state, bet):
    data = {}
    data['player_hand'] = draw_card(curr_state.deck_id, 2)
    data['dealer_hand'] = draw_card(curr_state.deck_id, 2)
    data['player_chips'] = curr_state.player_chips - bet
    data['player_bust'] = False
    data['dealer_bust'] = False
    data['hand_winner'] = ''
    data['blackjack'] = ''

    if check_hand(data['player_hand']) == 21:
        data['blackjack'] = 'P'

    if check_hand(data['dealer_hand']) == 21:
        data['blackjack'] = 'D'

    return data

FUNC_MAP = {
    'hit': player_hit,
    'stay': player_stay,
    'new': create_new_game,
    'bet': new_bet,
}