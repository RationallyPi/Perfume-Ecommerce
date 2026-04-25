from rest_framework import serializers
from .models import Perfume,Notes, PerfumeImage,PerfumeNote,Brand,Family

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['name']
class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = ['name']
        
class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ['name']


class PerfumeNoteSerializer(serializers.ModelSerializer):
    note = NotesSerializer()
    
    class Meta:
        model = PerfumeNote
        fields = ['note', 'type']

class PerfumeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerfumeImage
        fields = ['image', 'is_primary']


class PerfumeListSerializer(serializers.ModelSerializer):
    brand = serializers.CharField(source='brand.name')
    images = PerfumeImageSerializer(many=True, read_only=True)

    class Meta:
        model = Perfume
        fields = ['id', 'name', 'brand', 'price', 'images', 'slug']


class PerfumeSerializer(serializers.ModelSerializer):

    notes = PerfumeNoteSerializer(source='perfumenote_set', many=True, read_only=True)
    brand = BrandSerializer()
    family = FamilySerializer(many=True)
    images = PerfumeImageSerializer(many=True, read_only=True)
    class Meta:
        model = Perfume
        exclude = ['note','date_added','is_restocked','is_seasonal_pick']
    
    def to_representation(self, instance):
        data = super().to_representation(instance)

        brand = data.pop('brand')
        data['brand'] = brand['name']

        family = data.pop('family')
        data['family'] = [f['name'] for f in family]
        
        notes = data.pop('notes')
        data['notes'] = {
            'top': [n['note']['name'] for n in notes if n['type'] == 'top'],
            'middle': [n['note']['name'] for n in notes if n['type'] == 'middle'],
            'base': [n['note']['name'] for n in notes if n['type'] == 'base'],
        }
        return data
