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
class FilterOptionsView(APIView):
    def get(self, request):
        brands = Perfume.objects.values_list('brand__name', flat=True).distinct()
        notes = Perfume.objects.values_list('note__name', flat=True).distinct()
        family = Perfume.objects.values_list('family__name', flat=True).distinct()
        data = {
            'brands': brands,
            'notes': notes,
            'families': family
        }
        return Response(data)
class ShopView(APIView):
    def get(self, request):
        page = int(request.query_params.get('page', 1))
        limit = int(request.query_params.get('limit', 12))
        
        # Get filters from query params
        brand = request.query_params.get('brand')
        family = request.query_params.get('family')
        note = request.query_params.get('note')
        price_max = request.query_params.get('price_max')

        perfumes = Perfume.objects.all()

        # Apply filters
        if brand:
            perfumes = perfumes.filter(brand__name=brand)
        if family:
            perfumes = perfumes.filter(family__name=family)
        if note:
            perfumes = perfumes.filter(note__name=note)
        if price_max:
            perfumes = perfumes.filter(price__lte=price_max)

        # Pagination
        start = (page - 1) * limit
        end = start + limit
        total = perfumes.count()

        serializer = PerfumeListSerializer(perfumes[start:end], many=True)

        return Response({
            'perfumes': serializer.data,
            'total': total,
            'page': page,
            'has_more': end < total
        })