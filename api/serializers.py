from rest_framework import serializers
from .models import MenuItem, Order, Booking
from django.contrib.auth.models import User

# MenuItem Serializer
class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'  # Send all fields to frontend

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    items = MenuItemSerializer(many=True, read_only=True)  # Show menu item details

    class Meta:
        model = Order
        fields = '__all__'

# Booking Serializer
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

# User Serializer (for signup/login)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
