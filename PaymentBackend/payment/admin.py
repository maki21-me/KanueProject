from django.contrib import admin
from .models import Order, Payment

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer_name', 'customer_phone', 'total_amount', 'created_at')
    search_fields = ('customer_name', 'customer_phone')

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'method', 'status', 'created_at')
    list_filter = ('status', 'method')
    search_fields = ('order__customer_name', 'order__customer_phone')
    actions = ['mark_as_completed']

    @admin.action(description='Mark selected payments as Completed')
    def mark_as_completed(self, request, queryset):
        queryset.update(status='Completed')

