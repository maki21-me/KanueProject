from django.db import models

# Create your models here.
from django.db import models

class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    items = models.JSONField()  # store ordered items
    total_amount = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} - {self.customer_name}"

class Payment(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    method = models.CharField(max_length=50)  # e.g., 'CBE', 'Telebirr'
    status = models.CharField(max_length=20, default='Pending')  # 'Pending', 'Completed'
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment #{self.id} for Order #{self.order.id}"
