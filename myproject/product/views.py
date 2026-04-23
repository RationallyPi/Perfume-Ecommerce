from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PerfumeListSerializer
from .models import Perfume

class getPerfumeHome(APIView):
    def get(self,request):
        new_arrivals = Perfume.objects.order_by('-date_added')[:10]
        restocked = Perfume.objects.filter(is_restocked=True)
        seasonal = Perfume.objects.filter(is_seasonal_pick =True)
        data = {
            'new_arrivals': PerfumeListSerializer(new_arrivals, many=True).data,
            'restocked': PerfumeListSerializer(restocked, many=True).data,
            'seasonal': PerfumeListSerializer(seasonal, many=True).data
        }
        return Response(data)

