from django.contrib import admin
from db.models import Product,Category, SubCategory
from django.db import models
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'stock', 'status', 'publish_date')
    list_filter = ('category', 'status', 'visibility')
    search_fields = ('title', 'description', 'tags')

admin.site.register(Product, ProductAdmin)
admin.site.register(Category)
admin.site.register(SubCategory)
