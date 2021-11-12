from rest_framework import routers, urlpatterns
from .api import *
router = routers.DefaultRouter()
router.register('api/user', UserViewSet, basename='user')
router.register('api/menu', MenuViewSet, 'menu')
router.register('api/tournament', TournamentViewSet, 'tournament')
router.register('api/tournamentParticipant', TournamentParticipantViewSet, 'tournamentParticipant')
router.register('api/transactionHistory', TransactionHistoryViewSet, 'transactionHistory')
router.register('api/transactionHistoryActiveOnly', TransactionHistoryActiveViewSet, 'transactionHistoryActiveOnly')
router.register('api/tournamentGetAllActive', TournamentActiveViewSet, 'tournamentGetAllActive')
router.register('api/advertisement', AdvertisementViewSet, 'advertisement')
router.register('api/login', LoginViewSet, 'login')
router.register('api/signup', SignupViewSet, 'signup')

urlpatterns = router.urls