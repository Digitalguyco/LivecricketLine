from django.urls import path
from .views import MatchCards,CurrentSeries

urlpatterns = [
    path('match-cards/', MatchCards.as_view(), name='match-cards'),
    path('current-series/', CurrentSeries.as_view(), name='current-series'),
]