from django.urls import path
from . import views

urlpatterns = [
    path('getperfumeHome/',views.getPerfumeHome.as_view(),name='get_perfumesHome'),
]