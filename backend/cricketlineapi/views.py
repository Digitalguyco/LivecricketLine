from django.shortcuts import render
import requests
# Create your views here.

from rest_framework import generics
from rest_framework.response import Response

API_TOKEN = '7ef64068582b0bdb0be532f69ac0b1727c2741ad7584cf72208101e4f5a52261'


class MatchCards(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        data = None
        '''
        https://apiv2.api-cricket.com/cricket/?method=get_events&APIkey={API_TOKEN}&date_start=2023-07-24&date_stop=2023-08-24
        '''
        url = f'https://apiv2.api-cricket.com/cricket/?method=get_events&APIkey={API_TOKEN}&date_start=2023-09-02&date_stop=2023-08-08'
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
        else:
            data = 'No data found'

        return Response({
            'data': data['result'][0:6]
        })
    
class CurrentSeries(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        data = None
        '''
        https://apiv2.api-cricket.com/cricket/?method=get_leagues&APIkey={API_TOKEN}
        '''
        url = f'https://apiv2.api-cricket.com/cricket/?method=get_leagues&APIkey={API_TOKEN}'
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
        else:
            data = 'No data found'

        return Response({
            'data': data['result'][:10]
        })
    