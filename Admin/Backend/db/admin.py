from django.contrib import admin
from decimal import Decimal
from django.core.validators import MinValueValidator
from django.forms import CheckboxSelectMultiple
from .models import (Company, Invoice, 
                     Category, SubCategory, PaymentDetail, CurrencyRate, 
                     Product, ProductRelationship,
                     Seller, Shipment, Brand, EventOrder, 
                     Coupon, Review, ReviewImage, ReviewDetail, CustomUser,
                     Store, Stock, Sold, Price, SpecialPrice, Color, Size, Type, Option, Details,
                     Order, OrderItem, Notification)

class CompanyAdmin(admin.ModelAdmin):
    list_display = ['address', 'postal_code', 'registration_number', 'email', 'website', 'contact_number']
    search_fields = ['registration_number', 'email']

class InvoiceAdmin(admin.ModelAdmin):
    list_display = ['invoice_number', 'date', 'payment_status', 'total_amount']
    list_filter = ['payment_status']
    search_fields = ['invoice_number']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug']
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}

class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'slug']
    search_fields = ['title']
    list_filter = ['category']
    prepopulated_fields = {'slug': ('title',)}

class ProductRelationshipInline(admin.TabularInline):
    model = ProductRelationship
    fk_name = 'parent'  # Specify the foreign key used to relate to the parent Product
    extra = 1  # How many rows to show by default
    verbose_name = "Child Product"
    verbose_name_plural = "Child Products"

class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'sku', 'status', 'product_type', 'visibility', 'display_price', 'display_special_price', 'display_stock_quantity', 'display_sold_quantity', 'shipping_status', 'color', 'size', 'type']
    list_filter = ['status', 'product_type', 'visibility', 'shipping_status', 'color', 'size', 'type']
    search_fields = ['title', 'sku', 'color__name', 'size__name', 'type__name']
    
    def display_price(self, obj):
        return obj.price.value if obj.price else 'No Price'
    display_price.short_description = 'Price'

    def display_special_price(self, obj):
        special_price_obj = SpecialPrice.objects.filter(product=obj).first()  # Adjust based on your model relationship
        return special_price_obj.value if special_price_obj else 'No Special Price'
    display_special_price.short_description = 'Special Price'

    def display_stock_quantity(self, obj):
        stock = Stock.objects.filter(product=obj).first()  # Adjust the filter based on your model's relationship
        return stock.quantity if stock else 'No Stock'
    display_stock_quantity.short_description = 'Stock'

    def display_sold_quantity(self, obj):
        sold = Sold.objects.filter(product=obj).first()  # Adjust the filter based on your model's relationship
        return sold.quantity if sold else 'No Sold'
    display_sold_quantity.short_description = 'Sold'
    
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'brand':
            kwargs["queryset"] = Brand.objects.order_by('name')
        elif db_field.name == 'color':
            kwargs["queryset"] = Color.objects.order_by('name')
        elif db_field.name == 'size':
            kwargs["queryset"] = Size.objects.order_by('name')
        elif db_field.name == 'type':
            kwargs["queryset"] = Type.objects.order_by('name')
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


class PaymentDetailAdmin(admin.ModelAdmin):
    list_display = ['payment_method', 'cardholder_name', 'total_pay', 'invoice']
    search_fields = ['payment_method']

class CurrencyRateAdmin(admin.ModelAdmin):
    list_display = ['currency_name', 'usd_rate', 'exchange_type']
    list_filter = ['currency_name', 'exchange_type']


class SellerAdmin(admin.ModelAdmin):
    list_display = ['name', 'web_url', 'contact_email']
    search_fields = ['name']

class ShipmentAdmin(admin.ModelAdmin):
    list_display = ['shipment_no', 'order_id', 'customer_name', 'status']
    list_filter = ['status']
    search_fields = ['shipment_no', 'customer_name']

class BrandAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

class EventOrderAdmin(admin.ModelAdmin):
    list_display = ['customer_name', 'order_date', 'payment', 'location', 'status']
    list_filter = ['status']
    search_fields = ['customer_name']

class CouponAdmin(admin.ModelAdmin):
    list_display = ['title', 'code', 'discount', 'start_date', 'end_date', 'status']
    list_filter = ['status', 'start_date', 'end_date']
    search_fields = ['title', 'code']


class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'account_status', 'created_at', 'bacodo_user']
    search_fields = ['name', 'email']
    list_filter = ['account_status', 'bacodo_user']

class ReviewAdmin(admin.ModelAdmin):
    list_display = ['rating', 'comment', 'created_at']
    list_filter = ['rating', 'created_at']
    search_fields = ['comment']

class ReviewImageAdmin(admin.ModelAdmin):
    list_display = ['image']

class ReviewDetailAdmin(admin.ModelAdmin):
    list_display = ['review', 'user', 'product', 'image']
    list_filter = ['product']
    search_fields = ['review__comment', 'user__name', 'product__title']


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1  # Số lượng forms trống cho OrderItem mặc định hiển thị

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'status', 'payment_method', 'total_amount', 'created_at')
    list_filter = ('status', 'payment_method')
    search_fields = ('customer__username', 'invoice_number')
    inlines = [OrderItemInline]  # Thêm OrderItem vào trong cùng một trang với Order

class NotificationAdmin(admin.ModelAdmin):
    list_display = ('message', 'user', 'created_at')
    search_fields = ('user__username', 'message')
# Admin classes


admin.site.register(Company)
admin.site.register(Invoice)
admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Product)
admin.site.register(ProductRelationship)
admin.site.register(PaymentDetail)
admin.site.register(CurrencyRate)
admin.site.register(Seller)
admin.site.register(Shipment)
admin.site.register(Brand)
admin.site.register(EventOrder)
admin.site.register(Coupon)
admin.site.register(Review)
admin.site.register(ReviewImage)
admin.site.register(ReviewDetail)
admin.site.register(CustomUser)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Notification)
admin.site.register(Store)
admin.site.register(Stock)
admin.site.register(Sold)
admin.site.register(Price)
admin.site.register(SpecialPrice)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Type)
admin.site.register(Option)
admin.site.register(Details)