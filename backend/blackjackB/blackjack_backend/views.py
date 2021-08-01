from django.shortcuts import render
from .models import Game
from .utils import create_new_game, FUNC_MAP
from .serializers import GameSerializer

from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def new_game(request):
    """
    view comments go here
    Game is created with 'POST' request from frontend. Data only contains {player_bet: <int>}
    """
    if request.method == 'POST':

        #use helper functions in utils.py to complete request data for serializer
        request = FUNC_MAP['new'](request)
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #return error message for unsupported request methods 
    message = {'error' : f'This endpoint does not support {request.method} requests.'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)

    # if request.method == 'PATCH':
    #     curr_state = Game.objects.get(id=game_id)
    #     #use helper functions in utils.py to complete game logic and update game model
    #     # patch_data = #util function goes here

    #     #map 'key' action to function to run
    #     # map[action]()


    #     serializer = GameSerializer(curr_state, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)

    
    #return for exceptions

@api_view(['PATCH'])
def hit(request, game_id):

    curr_state = Game.objects.get(id=game_id)

    if request.method == 'PATCH':

        #use helper functions in utils.py to complete request data for serializer
        update = FUNC_MAP['hit'](curr_state)
        request.data.update(update)
        serializer = GameSerializer(curr_state, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #return error message for unsupported request methods    
    message = {'error' : f'This endpoint does not support {request.method} requests.'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def stay(request, game_id):

    curr_state = Game.objects.get(id=game_id)

    if request.method == 'PATCH':
        #use helper functions in utils.py to complete request data for serializer
        update = FUNC_MAP['stay'](curr_state)
        request.data.update(update)
        serializer = GameSerializer(curr_state, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #return error message for unsupported request methods 
    message = {'error' : f'This endpoint does not support {request.method} requests.'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def bet(request, game_id):

    curr_state = Game.objects.get(id=game_id)

    if request.method == 'PATCH':

        bet = request.data['player_bet']

        #use helper functions in utils.py to complete request data for serializer
        update = FUNC_MAP['bet'](curr_state, bet)
        request.data.update(update)
        serializer = GameSerializer(curr_state, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #return error message for unsupported request methods 
    message = {'error' : f'This endpoint does not support {request.method} requests.'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)