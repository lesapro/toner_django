from django.contrib import admin
from .models import (Country, ShippingLocation, ShippingCost, ShippingTime,
                     ShippingMethod, ShippingDetail, Company, Invoice,
                     Category, SubCategory, Attribute, AttributeValue,
                     Product, ProductRelationship, ProductGalleryImage,
                     ProductAttributeDetail, PaymentDetail, CurrencyRate,
                     Transaction, Seller, Shipment, Brand, EventOrder,
                     Coupon, Review, ReviewImage, ReviewDetail, CustomUser,
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


class AttributeAdmin(admin.ModelAdmin):
    list_display = ['name']


class AttributeValueAdmin(admin.ModelAdmin):
    list_display = ['attribute', 'value']
    list_filter = ['attribute']
    search_fields = ['value']


class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'sku', 'status', 'product_type', 'visibility',
                    'price']  # Thêm 'visibility' vào list_display
    list_filter = ['status', 'product_type',
                   'visibility']  # Thêm 'visibility' vào list_filter để cho phép lọc theo trường này
    search_fields = ['title', 'sku']
    date_hierarchy = 'publish_date'

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'brand':
            kwargs["queryset"] = Brand.objects.order_by('name')  # Custom queryset for the dropdown
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


class ProductRelationshipAdmin(admin.ModelAdmin):
    list_display = ['parent', 'child']
    search_fields = ['parent__title', 'child__title']


class ProductGalleryImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'image']
    search_fields = ['product__title']


class ProductAttributeDetailAdmin(admin.ModelAdmin):
    list_display = ['product', 'attribute_value']
    list_filter = ['product']
    search_fields = ['attribute_value__value']


class PaymentDetailAdmin(admin.ModelAdmin):
    list_display = ['payment_method', 'cardholder_name', 'total_pay', 'invoice']
    search_fields = ['payment_method']


class CurrencyRateAdmin(admin.ModelAdmin):
    list_display = ['currency_name', 'usd_rate', 'exchange_type']
    list_filter = ['currency_name', 'exchange_type']


class TransactionAdmin(admin.ModelAdmin):
    list_display = ['transaction_id', 'amount', 'payment_method', 'transaction_date', 'status']
    list_filter = ['status', 'transaction_date']
    search_fields = ['transaction_id', 'client_name']


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


class CountryAdmin(admin.ModelAdmin):
    list_display = ['country_code', 'country_name']
    search_fields = ['country_name', 'country_code']


class ShippingLocationAdmin(admin.ModelAdmin):
    list_display = ['location_name', 'address', 'city', 'country']
    search_fields = ['location_name', 'city']
    list_filter = ['country']


class ShippingCostAdmin(admin.ModelAdmin):
    list_display = ['amount']


class ShippingTimeAdmin(admin.ModelAdmin):
    list_display = ['duration']


class ShippingMethodAdmin(admin.ModelAdmin):
    list_display = ['method_name', 'description']
    search_fields = ['method_name']


class ShippingDetailAdmin(admin.ModelAdmin):
    list_display = ['product', 'country', 'shipping_from', 'cost', 'time', 'method']
    search_fields = ['product__title', 'country__country_name']
    list_filter = ['country', 'method']


admin.site.register(Country)
admin.site.register(ShippingLocation)
admin.site.register(ShippingCost)
admin.site.register(ShippingTime)
admin.site.register(ShippingMethod)
admin.site.register(ShippingDetail)
admin.site.register(Company)
admin.site.register(Invoice)
admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Attribute)
admin.site.register(AttributeValue)
admin.site.register(Product)
admin.site.register(ProductRelationship)
admin.site.register(ProductGalleryImage)
admin.site.register(ProductAttributeDetail)
admin.site.register(PaymentDetail)
admin.site.register(CurrencyRate)
admin.site.register(Transaction)
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