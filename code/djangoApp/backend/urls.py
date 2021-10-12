from rest_framework import routers, urlpatterns
from .api import *
router = routers.DefaultRouter()
router.register('api/user', UserViewSet, basename='user')
router.register('api/menu', MenuViewSet, 'menu')
router.register('api/tournament', TournamentParticipantViewSet, 'tournament')
router.register('api/tournamentParticipant', TournamentParticipantViewSet, 'tournamentParticipant')
router.register('api/transactionHistory', TransactionHistoryViewSet, 'transactionHistory')
router.register('api/advertisement', AdvertisementViewSet, 'advertisement')

urlpatterns = router.urls