from django.shortcuts import render
from .models import Game
from .utils import create_new_game, FUNC_MAP
from .serializers import GameSerializer

from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response


#User views:

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Game Views:

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


@api_view(['PATCH'])
def hit(request, game_id):
    """
    view comments go here
    """

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
    """
    view comments go here
    """

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
    """
    view comments go here
    """

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

"""
@api_view(['GET'])
def game_list(request):
    

    if request.method == 'GET':   

        query_set = Game.objects.filter(player=request.user.id)
        #use helper functions in utils.py to complete request data for serializer

        serializer = GameSerializer(data=query_set)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #return error message for unsupported request methods 
    message = {'error' : f'This endpoint does not support {request.method} requests.'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)
"""