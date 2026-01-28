from django.core.mail import send_mail, BadHeaderError
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from django.conf import settings
from .models import Contact, Booking
from .serializers import ContactSerializer, BookingSerializer

# ------------------- Contact Creation -------------------
class ContactCreateAPIView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        contact = serializer.save()
        try:
            send_mail(
                subject=f"New Contact Message from {contact.name}",
                message=f"Message: {contact.message}\nEmail: {contact.email}",
                from_email=settings.EMAIL_HOST_USER,        # must match EMAIL_HOST_USER
                recipient_list=['tamergetaw19@gmail.com'],  # admin recipient
                fail_silently=False,
            )
            print("Email sent successfully to tamergetaw19@gmail.com")
        except BadHeaderError:
            print("Invalid email header")
        except Exception as e:
            print(f"Email sending failed, printing email instead:\nTo: tamergetaw19@gmail.com\nSubject: New Contact Message from {contact.name}\nMessage: {contact.message}\nEmail: {contact.email}\nError: {e}")

# ------------------- List Contacts -------------------
class ContactListAPIView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

# ------------------- Contact Detail -------------------
class ContactDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

# ------------------- Booking -------------------
class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

# ------------------- Reply to Contact -------------------
class ReplyToContactAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        reply_message = request.data.get('reply')

        if not email or not reply_message:
            return Response({"error": "Email and reply message are required."}, status=400)

        try:
            send_mail(
                subject="Reply from canoe Restaurant",
                message=reply_message,
                from_email=settings.EMAIL_HOST_USER,   # must match EMAIL_HOST_USER
                recipient_list=[email],
                fail_silently=False,
            )
            return Response({"message": "Reply sent successfully"}, status=200)
        except Exception as e:
            print(f"Failed to send reply email, printing instead:\nTo: {email}\nMessage: {reply_message}\nError: {e}")
            return Response({"error": "Failed to send email."}, status=500)

# ------------------- Test Email -------------------
def test_email(request):
    try:
        send_mail(
            'Test Email',
            'This is a test from Django!',
            settings.EMAIL_HOST_USER,       # must match EMAIL_HOST_USER
            ['tamergetaw19@gmail.com'],     # recipient
            fail_silently=False,
        )
        return HttpResponse("Test email sent!")
    except Exception as e:
        print(f"Test email failed, printing instead:\nTo: tamergetaw19@gmail.com\nError: {e}")
        return HttpResponse(f"Test email failed: {e}", status=500)
