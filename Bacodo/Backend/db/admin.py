from django.contrib import admin
from decimal import Decimal
from django.core.validators import MinValueValidator
from django.forms import CheckboxSelectMultiple
from .models import (Company, Invoice, ChildProduct,
                     Category, SubCategory, PaymentDetail, CurrencyRate, 
                     Product, ProductName,
                     Seller, Shipment, Brand, EventOrder, 
                     Coupon, Review, ReviewImage, ReviewDetail, CustomUser,
                     Store, Color, Size, Type, Option, Details,
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
    
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'get_product_name', 'sku', 'status', 'price', 'special_price',
        'shipping_status','best_selling'
    )
    list_filter = ('status', 'visibility', 'shipping_status', 'featured', 'best_selling')
    search_fields = ('name__name', 'sku', 'tags')
    raw_id_fields = ('name', 'brand', 'store', 'video', 'category', 'subcategory')
    date_hierarchy = 'publish_date'

    def get_product_name(self, obj):
        return str(obj.name)
    get_product_name.short_description = 'Name'
    get_product_name.admin_order_field = 'name'
@admin.register(ChildProduct)
class ChildProductAdmin(admin.ModelAdmin):
    list_display = (
        'child_sku', 'price', 'special_price',
        'stock', 'sold'
    )
    list_filter = ('parent__status', 'parent__visibility')
    search_fields = ('child_sku', 'parent__name__name', 'parent__sku')
    raw_id_fields = ('parent', 'color', 'size', 'type', 'option', 'details', 'shipping_location')

    def get_parent_name(self, obj):
        return obj.parent.name
    get_parent_name.short_description = 'Parent Name'

class ChildProductAdmin(admin.ModelAdmin):
    list_display = ('child_sku', 'price', 'special_price', 'stock', 'sold')
    list_filter = ('parent__status', 'parent__visibility')
    search_fields = ('child_sku', 'parent__name', 'parent__sku')
    raw_id_fields = ('parent', 'color', 'size', 'type', 'option', 'details')

    def get_parent_name(self, obj):
        return obj.parent.name
    get_parent_name.short_description = 'Parent Name'
    
@admin.register(ProductName)
class ProductNameAdmin(admin.ModelAdmin):
    search_fields = ['name']

class StockAdmin(admin.ModelAdmin):
    search_fields = ['quantity']



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
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Type)
admin.site.register(Option)
admin.site.register(Details)