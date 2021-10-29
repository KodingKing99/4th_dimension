# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Advertisement(models.Model):
    adid = models.AutoField(db_column='adId', primary_key=True)  # Field name made lowercase.
    tournamentid = models.IntegerField(db_column='tournamentId')  # Field name made lowercase.
    adlocation = models.CharField(db_column='adLocation', max_length=45)  # Field name made lowercase.
    addescription = models.CharField(db_column='adDescription', max_length=500, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Advertisements'


class Menu(models.Model):
    itemid = models.AutoField(db_column='itemId', primary_key=True)  # Field name made lowercase.
    itemname = models.CharField(db_column='itemName', unique=True, max_length=45)  # Field name made lowercase.
    itemdescription = models.CharField(db_column='itemDescription', max_length=500, blank=True, null=True)  # Field name made lowercase.
    itemprice = models.DecimalField(db_column='itemPrice', max_digits=5, decimal_places=2, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Menu'

    def __str__(self):
        return self.itemname


class Tournamentparticipant(models.Model):
    userid = models.IntegerField(db_column='userId')  # Field name made lowercase.
    tournamentid = models.IntegerField(db_column='tournamentId', unique=True, blank=True, null=True)  # Field name made lowercase.
    userscore = models.IntegerField(db_column='userScore', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'TournamentParticipants'


class Tournament(models.Model):
    tournamentid = models.AutoField(db_column='tournamentId', primary_key=True)  # Field name made lowercase.
    tournamentdate = models.DateTimeField(db_column='TournamentDate')  # Field name made lowercase.
    tournamnetsponsor = models.IntegerField(db_column='tournamnetSponsor')  # Field name made lowercase.
    tournamentprize = models.DecimalField(db_column='tournamentPrize', max_digits=6, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    tournamentholecount = models.IntegerField(db_column='tournamentHoleCount', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Tournaments'

    def __str__(self):
        return "Tournament on " + str(self.tournamentdate)


class Transactionhistory(models.Model):
    transactionid = models.AutoField(db_column='transactionId', primary_key=True)  # Field name made lowercase.
    transactionprice = models.DecimalField(db_column='transactionPrice', max_digits=5, decimal_places=2)  # Field name made lowercase.
    transactionbuyer = models.IntegerField(db_column='transactionBuyer')  # Field name made lowercase.
    transactiondrinkmeister = models.IntegerField(db_column='transactionDrinkMeister', blank=True, null=True)  # Field name made lowercase.
    transactiondate = models.DateTimeField(db_column='TransactionDate')
    transactionactiveflag = models.BooleanField(db_column='transactionActiveFlag', default=True)  # Field name made lowercase.

    class Meta:
        db_table = 'TransactionHistory'
        verbose_name_plural = "Transactionhistory"

    def __str__(self):
        return "Transaction made at " + str(self.transactiondate)


class User(models.Model):
    userid = models.AutoField(db_column='userId', primary_key=True)  # Field name made lowercase.
    useremail = models.CharField(db_column='userEmail', unique=True, max_length=225)  # Field name made lowercase.
    userfirstname = models.CharField(db_column='userFirstName', max_length=45)  # Field name made lowercase.
    userlastname = models.CharField(db_column='userLastName', max_length=45, blank=True, null=True)  # Field name made lowercase.
    userpassword = models.CharField(db_column='userPassword', max_length=128)  # Field name made lowercase.
    useraccount = models.DecimalField(db_column='userAccount', max_digits=6, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    userrole = models.IntegerField(db_column='userRole')  # Field name made lowercase.
    usersalt = models.CharField(db_column='userSalt', max_length=128, null=True)
    class Meta:
        db_table = 'Users'

    def __str__(self):
        return self.userfirstname + " " + self.userlastname + " (UID: " + str(self.userid) + ")"

