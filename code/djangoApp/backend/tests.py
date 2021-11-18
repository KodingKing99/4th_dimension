from django.test import TestCase
from backend.models import User
from backend.models import Menu
from backend.models import Transactionhistory
from backend.models import Tournament
from backend.models import Tournamentparticipant

import datetime
import time


# Create your tests here.
class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(
            userfirstname='test',
            userlastname='user',
            userpassword='testpassword',
            useremail='test@mail.com',
            useraccount=20,
            userrole=1
        )

    def test_user_creation(self):
        print('test_user_creation')
        user = User.objects.get(userfirstname='test')
        time.sleep(.5)
        self.assertEqual(user.userfirstname, 'test')
        self.assertEqual(user.userlastname, 'user')
        self.assertEqual(user.userpassword, 'testpassword')
        self.assertEqual(user.useremail, 'test@mail.com')
        self.assertEqual(user.useraccount, 20)
        self.assertEqual(user.userrole, 1)

class MenuTestCase(TestCase):
    def setUp(self):
        Menu.objects.create(
            itemname='gak',
            itemdescription='fresh klingon worms',
            itemprice=10,
            itemimage="worms",
        )
        Menu.objects.create(
            itemname='soda',
            itemdescription='bubbly sugar water',
            itemprice=2,
            itemimage="soda",
        )

    def test_menu_creation(self):
        print('test_menu_creation')
        worms = Menu.objects.get(itemname='gak')
        time.sleep(.5)
        self.assertEqual(worms.itemname, 'gak')
        self.assertEqual(worms.itemdescription, 'fresh klingon worms')
        self.assertEqual(worms.itemprice, 10)
        self.assertEqual(worms.itemimage, "worms")

class TransactionhistoryTestCase(TestCase):
    def setUp(self):
        Transactionhistory.objects.create(
            transactionprice=998,
            transactionbuyer=1,
            transactiondrinkmeister=1,
            transactiondate='2019-01-01',
            transactionactiveflag=1,
        )
        Transactionhistory.objects.create(
            transactionprice=999,
            transactionbuyer=2,
            transactiondrinkmeister=2,
            transactiondate='2019-01-02',
            transactionactiveflag=0,
        )
    def test_transactionhistory_creation(self):
        print('test_transactionhistory_creation')
        transaction = Transactionhistory.objects.get(transactionprice=998)
        time.sleep(.5)
        self.assertEqual(transaction.transactionprice, 998)
        self.assertEqual(transaction.transactionbuyer, 1)
        self.assertEqual(transaction.transactiondrinkmeister, 1)
        self.assertEqual(transaction.transactionactiveflag, 1)
        transaction2 = Transactionhistory.objects.get(transactionprice=999)
        time.sleep(.5)
        self.assertEqual(transaction2.transactionprice, 999)
        self.assertEqual(transaction2.transactionbuyer, 2)
        self.assertEqual(transaction2.transactiondrinkmeister, 2)
        self.assertEqual(transaction2.transactionactiveflag, 0)

class TournamentTestCase(TestCase):
    def setUp(self):
        Tournament.objects.create(
            tournamentsponsor=9,
            tournamentprize=4000,
            tournamentholecount=18,
            tournamentactiveflag=1,
            tournamentdate=datetime.date(2019, 1, 1),
        )
    def test_tournament_creation(self):
        print('test_tournament_creation')
        tournament = Tournament.objects.get(tournamentsponsor=9)
        time.sleep(.5)
        self.assertEqual(tournament.tournamentsponsor, 9)
        self.assertEqual(tournament.tournamentprize, 4000)
        self.assertEqual(tournament.tournamentholecount, 18)
        self.assertEqual(tournament.tournamentactiveflag, 1)

class TournamentparticipantTestCase(TestCase):
    def setUp(self):
        Tournamentparticipant.objects.create(
            userid=22,
            tournamentid=42,
            userscore=60,
        )
    def test_tournamentparticipant_creation(self):
        print('test_tournamentparticipant_creation')
        tournamentparticipant = Tournamentparticipant.objects.get(userid=22)
        time.sleep(.5)
        self.assertEqual(tournamentparticipant.tournamentid, 42)
        self.assertEqual(tournamentparticipant.userscore, 60)
