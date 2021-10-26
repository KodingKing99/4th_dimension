from rest_framework import viewsets, permissions
from .models import *
from .serializers import UserSerializer, TournamentSerializer, MenuSerializer, AdvertisementSerializer, TournamentParticipantSerializer, TransactionHistorySerializer, LoginSerializer, SignupSerializer
import hashlib
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
class LoginViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        email = self.request.query_params.get('email')
        password = self.request.query_params.get('password')
        if not email or not password:
            return User.objects.none()
        users = User.objects.filter(useremail=email)
        salt = users.values('usersalt')
        salt = salt[0]['usersalt']
        password_hashed = hashlib.sha256(str(users.values('userfirstname')[0]['userfirstname']).encode('utf-8')+str(salt).encode('utf-8')).hexdigest()
        print(password_hashed)
        
        return User.objects.filter(useremail=email).filter(userpassword=password_hashed)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LoginSerializer
class SignupViewSet(viewsets.ModelViewSet):
    queryset = User.objects.none()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SignupSerializer