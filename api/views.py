from django.shortcuts import render

from rest_framework import viewsets
from .models import MenuItem, Order, Booking
from .serializers import MenuItemSerializer, OrderSerializer, BookingSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# restaurant_backend/api/views.py
from rest_framework import viewsets
from contact.models import Contact
from contact.serializers import ContactSerializer

class ContactViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


# Menu API
class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]  # Only logged-in users

    def create(self, request, *args, **kwargs):
        user = request.user
        items_ids = request.data.get('items', [])
        items = MenuItem.objects.filter(id__in=items_ids)
        total_price = sum(item.price for item in items)
        order = Order.objects.create(user=user, total_price=total_price)
        order.items.set(items)
        order.save()
        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]  # Only logged-in users

class SignupView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username exists"}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password, email=email)
        token = Token.objects.create(user=user)
        return Response({"token": token.key})
