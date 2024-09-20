# from django.urls import path, include
# from rest_framework.routers import DefaultRouter

# from .views import (
#     CarViewSet,
#     UserViewSet,
#     BookingViewSet,
#     # AdminViewSet,
#     # ReservationViewSet,
#     CancellationViewSet,
#     AvailabilityViewSet,
#     ContactViewSet,
#     # LoginView
# )

# router = DefaultRouter()
# router.register('cars', CarViewSet, basename='car')
# router.register('users', UserViewSet, basename='user')
# router.register('bookings', BookingViewSet, basename='booking')
# # router.register('admins', AdminViewSet, basename='admin')
# # router.register('reservations', ReservationViewSet, basename='reservation')
# router.register('cancellations', CancellationViewSet, basename='cancellation')
# router.register('availability', AvailabilityViewSet, basename='availability')
# router.register('contacts', ContactViewSet, basename='contact')

# app_name = 'car_booking'

# urlpatterns = [
#     path('', include(router.urls)),         # Includes all the viewset routes
#     # path('login/', LoginView.as_view(), name='login'),  # Custom route for login
# ]


# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from rest_framework_simplejwt.views import TokenRefreshView
# from .views import UserViewSet, CarViewSet, BookingViewSet, CancellationViewSet, AvailabilityViewSet, ContactViewSet
# from .serializers import CustomTokenObtainPairView

# router = DefaultRouter()
# router.register(r'users', UserViewSet)
# router.register(r'cars', CarViewSet)
# router.register(r'bookings', BookingViewSet)
# router.register(r'cancellations', CancellationViewSet)
# router.register(r'availabilities', AvailabilityViewSet)
# router.register(r'contacts', ContactViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
#     path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
# ]


# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    UserViewSet, 
    CarViewSet, 
    BookingViewSet, 
    CancellationViewSet, 
    AvailabilityViewSet, 
    ContactViewSet,
    CustomTokenObtainPairView
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'cars', CarViewSet)
router.register(r'bookings', BookingViewSet, basename='booking')
router.register(r'cancellations', CancellationViewSet)
router.register(r'availabilities', AvailabilityViewSet)
# router.register(r'availabilities', AvailabilityViewSet, basename='availability')
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
]
