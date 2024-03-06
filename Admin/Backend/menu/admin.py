from django.contrib import admin
from .models import Product, Category

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'stock', 'status', 'publish_date')
    list_filter = ('category', 'status', 'visibility')
    search_fields = ('title', 'description', 'tags')

admin.site.register(Category)