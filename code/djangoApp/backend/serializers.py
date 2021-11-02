from rest_framework import serializers
from .models import *
import datetime
import hashlib

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
class LoginSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('userfirstname', 'userlastname', 'useremail', 'userrole', 'userid', 'useraccount')
class SignupSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = '__all__'

	def create(self, validated_data):
		validated_data["usersalt"] = validated_data["userfirstname"] + str(datetime.datetime.now())
		print(validated_data["usersalt"])
		validated_data["userpassword"] = hashlib.sha256(str(validated_data["userpassword"]).encode('utf-8')+str(validated_data["usersalt"]).encode('utf-8')).hexdigest()
		print(validated_data["userpassword"])
		user = User.objects.create(**validated_data)
		return user