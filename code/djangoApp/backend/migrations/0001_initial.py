# Generated by Django 3.2.8 on 2021-10-18 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Advertisement',
            fields=[
                ('adid', models.AutoField(db_column='adId', primary_key=True, serialize=False)),
                ('tournamentid', models.IntegerField(db_column='tournamentId')),
                ('adlocation', models.CharField(db_column='adLocation', max_length=45)),
                ('addescription', models.CharField(blank=True, db_column='adDescription', max_length=500, null=True)),
            ],
            options={
                'db_table': 'Advertisements',
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('itemid', models.AutoField(db_column='itemId', primary_key=True, serialize=False)),
                ('itemname', models.CharField(db_column='itemName', max_length=45, unique=True)),
                ('itemdescription', models.CharField(blank=True, db_column='itemDescription', max_length=500, null=True)),
                ('itemprice', models.DecimalField(blank=True, db_column='itemPrice', decimal_places=2, max_digits=5, null=True)),
            ],
            options={
                'db_table': 'Menu',
            },
        ),
        migrations.CreateModel(
            name='Tournament',
            fields=[
                ('tournamentid', models.AutoField(db_column='tournamentId', primary_key=True, serialize=False)),
                ('tournamentdate', models.DateTimeField(db_column='TournamentDate')),
                ('tournamnetsponsor', models.IntegerField(db_column='tournamnetSponsor')),
                ('tournamentprize', models.DecimalField(blank=True, db_column='tournamentPrize', decimal_places=2, max_digits=6, null=True)),
                ('tournamentholecount', models.IntegerField(blank=True, db_column='tournamentHoleCount', null=True)),
            ],
            options={
                'db_table': 'Tournaments',
            },
        ),
        migrations.CreateModel(
            name='Tournamentparticipant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField(db_column='userId')),
                ('tournamentid', models.IntegerField(blank=True, db_column='tournamentId', null=True, unique=True)),
                ('userscore', models.IntegerField(blank=True, db_column='userScore', null=True)),
            ],
            options={
                'db_table': 'TournamentParticipants',
            },
        ),
        migrations.CreateModel(
            name='Transactionhistory',
            fields=[
                ('transactionid', models.AutoField(db_column='transactionId', primary_key=True, serialize=False)),
                ('transactionprice', models.DecimalField(db_column='transactionPrice', decimal_places=2, max_digits=5)),
                ('transactionbuyer', models.IntegerField(db_column='transactionBuyer')),
                ('transactiondrinkmeister', models.IntegerField(blank=True, db_column='transactionDrinkMeister', null=True)),
                ('transactiondate', models.DateTimeField(db_column='TransactionDate')),
            ],
            options={
                'verbose_name_plural': 'Transactionhistory',
                'db_table': 'TransactionHistory',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('userid', models.AutoField(db_column='userId', primary_key=True, serialize=False)),
                ('useremail', models.CharField(db_column='userEmail', max_length=225, unique=True)),
                ('userfirstname', models.CharField(db_column='userFirstName', max_length=45)),
                ('userlastname', models.CharField(blank=True, db_column='userLastName', max_length=45, null=True)),
                ('userpassword', models.CharField(db_column='userPassword', max_length=128)),
                ('useraccount', models.DecimalField(blank=True, db_column='userAccount', decimal_places=2, max_digits=6, null=True)),
                ('userrole', models.IntegerField(db_column='userRole')),
            ],
            options={
                'db_table': 'Users',
            },
        ),
    ]