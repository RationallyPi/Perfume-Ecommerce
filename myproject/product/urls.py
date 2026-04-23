from django.urls import path
from . import views

urlpatterns = [
    path('getperfume/',views.getPerfume.as_view(),name='get_perfumes'),
]