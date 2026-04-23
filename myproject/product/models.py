from django.db import models

class Notes(models.Model):
    name = models.CharField(max_length=100,unique=True)
    def __str__(self):
        return self.name
    
class Family(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Brand(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class PerfumeImage(models.Model):
    perfume = models.ForeignKey('Perfume', on_delete=models.CASCADE, related_name='images')
    image = models.ImageField() 
    is_primary = models.BooleanField(default=False)
# Create your models here.
class Perfume(models.Model):
    name = models.CharField(max_length=100)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    family = models.ManyToManyField(Family,blank=True)
    note = models.ManyToManyField(Notes, through='PerfumeNote',blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    is_seasonal_pick = models.BooleanField(default=False)
    is_restocked = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
    
class PerfumeNote(models.Model):
    NOTE_TYPES = [
        ('N/A', 'N/A'),
        ('top', 'Top'),
        ('middle', 'Middle'),
        ('base', 'Base'),
    ]
    perfume = models.ForeignKey('Perfume', on_delete=models.CASCADE)
    note = models.ForeignKey(Notes, on_delete=models.CASCADE)
    type = models.CharField(max_length=10, choices=NOTE_TYPES,default='N/A')

    def __str__(self):
        return f"{self.perfume} - {self.note} ({self.type})"
