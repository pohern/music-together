from django.shortcuts import render
import environ
environ.Env()
environ.Env.read_env()
import os
CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']
REDIRECT_URI = os.environ['REDIRECT_URI']
from rest_framework.views import APIView
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
# Create your views here.

class AuthURL(APIView):
    def get(self, request, format=None):
        scopes= 'user-read-playback-state user-modify-playback-state user-read-currently-playing'

        url = Request('GET','https://accounts.spotify.com/authorize', params={
            'scope':scopes,
            'response_type': 'code',
            'redirect_uri': REDIRECT_URI,
            'client_id': CLIENT_ID
        }).prepare().url

        return Response({'url': url}, status=status.HTTP_200_OK)