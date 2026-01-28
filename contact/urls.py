from django.urls import path
from .views import (
    ContactCreateAPIView,
    ContactListAPIView,
    ContactDetailAPIView,
    BookingCreateView,
    ReplyToContactAPIView,
    test_email
)

urlpatterns = [
    path('contact/', ContactCreateAPIView.as_view()),            # POST
    path('contacts/', ContactListAPIView.as_view()),             # GET
    path('contacts/<int:pk>/', ContactDetailAPIView.as_view()),  # GET / PUT / DELETE
    path('booking/', BookingCreateView.as_view()),               # POST
    path('contact/reply/', ReplyToContactAPIView.as_view(), name='contact-reply'),
    path('test-email/', test_email),
]
