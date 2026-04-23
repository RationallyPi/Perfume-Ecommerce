from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PerfumeSerializer
from .models import Perfume

class getPerfume(APIView):
    def get(self,request):
        perfumes = Perfume.objects.all()
        serializer = PerfumeSerializer(perfumes,many=True)
        return Response(serializer.data)

