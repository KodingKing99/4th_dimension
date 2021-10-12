from rest_framework import serializers
from .models import *

#UserSerializer, TournamentSerializer, MenuSerializer,
#AdvertisementSerializer, TournamentParticipantSerializer, 
#TransactionHistorySerializer
class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'
class TournamentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tournament
		fields = '__all__'
class TournamentParticipantSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tournamentparticipant
		fields = '__all__'
class MenuSerializer(serializers.ModelSerializer):
	class Meta:
		model = Menu
		fields = '__all__'
class AdvertisementSerializer(serializers.ModelSerializer):
	class Meta:
		model = Advertisement
		fields = '__all__'
class TransactionHistorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Transactionhistory
		fields = '__all__'