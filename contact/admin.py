from django.contrib import admin
from .models import Contact, Booking

admin.site.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")  # fields you want to see in the list
    search_fields = ("name", "email", "message")
admin.site.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "date", "time", "guests")  # remove email

