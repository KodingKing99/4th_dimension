from django.contrib import admin

from .models import Advertisement, Menu, Tournamentparticipant, Tournament, Transactionhistory, User

# Register your models here.
admin.site.register(Advertisement)
admin.site.register(Menu)
admin.site.register(Tournamentparticipant)
admin.site.register(Tournament)
admin.site.register(Transactionhistory)
admin.site.register(User)
