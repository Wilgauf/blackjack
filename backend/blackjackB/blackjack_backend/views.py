from django.shortcuts import render
from .models import Game
from .utils import create_new_game
from .serializers import GameSerializer

from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.

@api_view(['GET', 'POST', 'PATCH'])
def games(request, game_id=None):
    """
    view comments go here
    Game is created with 'POST' request from frontend. Data only contains {player_bet: <int>}
    """
    # action = request.query_params.get('action')
    # if action in []
    if request.method == 'POST':
        #use helper functions in utils.py to complete request data for serializer
        request = create_new_game(request)
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PATCH':
        curr_state = Game.objects.get(id=game_id)
        #use helper functions in utils.py to complete game logic and update game model
        # patch_data = #util function goes here

        #map 'key' action to function to run
        # map[action]()
        

        serializer = GameSerializer(curr_state, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    
    #return for exceptions
