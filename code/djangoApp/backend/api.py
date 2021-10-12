from rest_framework import viewsets, permissions
from .models import *
from .serializers import UserSerializer, TournamentSerializer, MenuSerializer, AdvertisementSerializer, TournamentParticipantSerializer, TransactionHistorySerializer
# from .serializers import UserSerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer 
class TournamentViewSet(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TournamentSerializer 
class TournamentParticipantViewSet(viewsets.ModelViewSet):
    queryset = Tournamentparticipant.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TournamentParticipantSerializer 
class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MenuSerializer 
class AdvertisementViewSet(viewsets.ModelViewSet):
    queryset = Advertisement.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AdvertisementSerializer 
class TransactionHistoryViewSet(viewsets.ModelViewSet):
    queryset = Transactionhistory.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TransactionHistorySerializer 