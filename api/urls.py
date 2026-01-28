from django.urls import path, include
from rest_framework import routers
from .views import MenuItemViewSet, OrderViewSet, BookingViewSet, SignupView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from .views import ContactViewSet

router = routers.DefaultRouter()
router.register(r'contacts', ContactViewSet, basename='contact')

urlpatterns = [
    # ... other urls
] + router.urls

# Create a router for viewsets
router = routers.DefaultRouter()
router.register(r'menu', MenuItemViewSet)       # /api/menu/
router.register(r'orders', OrderViewSet)        # /api/orders/
router.register(r'bookings', BookingViewSet)    # /api/bookings/

urlpatterns = [
    path('', include(router.urls)),             # Include all viewset routes
    path('signup/', SignupView.as_view(), name='signup'),  # User signup
    path('login/', obtain_auth_token, name='login'),       # User login (returns token)
]
