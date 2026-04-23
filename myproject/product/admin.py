from django.contrib import admin
from .models import Perfume, PerfumeImage, PerfumeNote, Notes, Family, Brand

class PerfumeImageInline(admin.TabularInline):
    model = PerfumeImage
    extra = 1

class PerfumeNoteInline(admin.TabularInline):
    model = PerfumeNote
    extra = 3  # number of empty rows shown by default

class PerfumeAdmin(admin.ModelAdmin):
    inlines = [PerfumeNoteInline, PerfumeImageInline,]

admin.site.register(Perfume, PerfumeAdmin)
admin.site.register(Notes)
admin.site.register(Family)
admin.site.register(Brand)
