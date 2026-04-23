from django.db import models
from django.conf import settings


STATUS_CHOICES = [('pending', 'Pending'), ('shipped', 'Shipped'), ('delivered', 'Delivered')]
# Create your models here.
class Orders(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    phone=models.CharField(max_length=20)
    address=models.TextField()
    perfume=models.ForeignKey('product.Perfume', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    quantity=models.IntegerField()
    price=models.DecimalField(max_digits=10, decimal_places=2)
    order_date=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name