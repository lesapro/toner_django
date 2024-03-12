from django.db import models
import datetime
from django.utils import timezone
from django.conf import settings
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import transaction
from django.shortcuts import get_object_or_404, HttpResponse
from django.db.models import F
from django.core.validators import MinValueValidator
from decimal import Decimal
from django.db import transaction
from django.utils.text import slugify
from django.contrib.auth.models import User
import secrets
from django.db.models.constraints import UniqueConstraint

class Company(models.Model):
    address = models.TextField()
    postal_code = models.CharField(max_length=10)
    registration_number = models.CharField(max_length=12)
    email = models.EmailField()
    website = models.URLField()
    contact_number = models.CharField(max_length=15)


class Invoice(models.Model):
    PAYMENT_STATUS_CHOICES = [
        ('Paid', 'Paid'),
        ('Unpaid', 'Unpaid'),
        ('Refund', 'Refund')
    ]
    invoice_number = models.CharField(max_length=20)
    date = models.DateTimeField()
    payment_status = models.CharField(max_length=10, choices=PAYMENT_STATUS_CHOICES)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    billing_address = models.TextField()
    billing_phone = models.CharField(max_length=15)
    billing_tax_no = models.CharField(max_length=20)
    shipping_address = models.TextField()
    shipping_phone = models.CharField(max_length=15)
    shipping_tax_no = models.CharField(max_length=20)
    notes = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

class Category(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images/categories/', blank=True, null=True)

    def __str__(self):
        return self.title

class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="subcategories")
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=100, unique=True, default='default-slug')
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images/categories/', blank=True, null=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(SubCategory, self).save(*args, **kwargs)


class Brand(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='brand_logos/', blank=True, null=True)
    items_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


def sell_product(request, product_id):
    with transaction.atomic():
        # Giả sử `product_id` là ID của sản phẩm cần bán
        product = get_object_or_404(Product, pk=product_id)

        # Kiểm tra xem sản phẩm có kho và số lượng bán không
        if product.stock and product.sold:
            # Giảm số lượng trong kho
            product.stock.quantity = F('quantity') - 1
            product.stock.save()

            # Tăng số lượng đã bán
            product.sold.quantity = F('quantity') + 1
            product.sold.save()

            return HttpResponse("Sản phẩm đã được bán thành công!")
        else:
            return HttpResponse("Không thể bán sản phẩm này do thiếu thông tin kho hoặc số lượng bán.")               

class Color(models.Model):
    name = models.CharField(max_length=255)
    hex = models.CharField(max_length=7)  # Removed unique=True from both

    class Meta:
        constraints = [
            UniqueConstraint(fields=['name', 'hex'], name='unique_name_hex')
        ]

    def __str__(self):
        return f"{self.name} ({self.hex})"

class Size(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class Type(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class Option(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class Details(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class ShippingCountry(models.Model):
    country_code = models.CharField(max_length=2, unique=True)  # Ensure country codes are unique
    country_name = models.CharField(max_length=255, unique=True)  # Ensure country names are unique

    def __str__(self):
        return self.country_name

class ShippingLocation(models.Model):
    location_name = models.CharField(max_length=255, unique=True)
    location_code = models.CharField(max_length=2, unique=True, null=True, blank=True)
    # Now allows NULL values and can be left blank in forms.

    def __str__(self):
        return self.location_name


class ShippingLocationDetails(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    shipping_location = models.ForeignKey(ShippingLocation, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('product', 'shipping_location')
        # This ensures that the combination of product and shipping location is unique.

    def __str__(self):
        return f"{self.product} - {self.shipping_location}"
class ShippingCost(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2, unique=True)  # Assuming shipping costs should be unique

    def __str__(self):
        return f"{self.amount}"

class ShippingTime(models.Model):
    duration = models.CharField(max_length=255, unique=True)  # Assuming durations should be unique

    def __str__(self):
        return self.duration

class ShippingMethod(models.Model):
    method_name = models.CharField(max_length=255, unique=True)  # Ensure method names are unique

    def __str__(self):
        return self.method_name

# Assuming you have a Product model defined elsewhere
class ShippingDetail(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    #country = models.ForeignKey(ShippingCountry, on_delete=models.CASCADE)
    #shipping_from = models.ForeignKey(ShippingLocation, on_delete=models.CASCADE)
    cost = models.ForeignKey(ShippingCost, on_delete=models.CASCADE)
    time = models.ForeignKey(ShippingTime, on_delete=models.CASCADE)
    method = models.ForeignKey(ShippingMethod, on_delete=models.CASCADE)
    # Note: Uniqueness for ShippingDetail might be more complex and involve unique_together if needed
    class Meta:
        unique_together = ('product', 'cost', 'time', 'method')
    def __str__(self):
        return f"Shipping Detail for {self.product_id}"

class Video(models.Model):
    video_url = models.CharField(max_length=255, unique=True)  # Ensure video URLs are unique

    def __str__(self):
        return self.video_url
from django.utils.text import slugify        
class ProductName(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(ProductName, self).save(*args, **kwargs)

    class Meta:
        unique_together = (('name', 'slug'),)
class ProductSKU(models.Model):
    sku = models.CharField(max_length=100, unique=True)  # Unique SKU for each product

    def __str__(self):
        return self.sku                   
class Store(models.Model):
    name = models.CharField(max_length=255, unique=True)  # Ensure store names are unique
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
class Stock(models.Model):
    quantity = models.IntegerField(default=0, unique=True)

    def __str__(self):
        return f"Stock ID: {self.id} - Quantity: {self.quantity}"

class Sold(models.Model):
    quantity = models.IntegerField(default=0, unique=True)

    def __str__(self):
        return f"Sold ID: {self.id} - Quantity: {self.quantity}"

class Price(models.Model):
    value = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0.00'), validators=[MinValueValidator(Decimal('0.00'))], unique=True)

    def __str__(self):
        return f"Price ID: {self.id} - Value: {self.value}"

class SpecialPrice(models.Model):
    value = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0.00'), validators=[MinValueValidator(Decimal('0.00'))], unique=True)

    def __str__(self):
        return f"Special Price ID: {self.id} - Value: {self.value}"


class Affiliate(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    parent_affiliate = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='sub_affiliates')
    affiliate_code = models.CharField(max_length=255, unique=True)
    level = models.IntegerField(default=1)  # 1 for primary, 2 for sub-affiliates
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - Level {self.level}"

    def save(self, *args, **kwargs):
        if not self.affiliate_code:
            self.affiliate_code = self.generate_unique_affiliate_code()
        super().save(*args, **kwargs)

    @staticmethod
    def generate_unique_affiliate_code():
        while True:
            random_code = secrets.token_hex(4)  # Generates a random 8 character hex string.
            if not Affiliate.objects.filter(affiliate_code=random_code).exists():
                return random_code

class EcommerceTransaction(models.Model):
    TRANSACTION_STATUS_CHOICES = [
        ('Successful', 'Successful'),
        ('Pending', 'Pending'),
        ('Denied', 'Denied')
    ]
    transaction_id = models.CharField(max_length=20)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=100)
    transaction_date = models.DateTimeField()
    status = models.CharField(max_length=10, choices=TRANSACTION_STATUS_CHOICES)
    client_name = models.CharField(max_length=100, null=True, blank=True)
    client_email = models.EmailField(null=True, blank=True)
    transaction_type = models.CharField(max_length=4, choices=[('Up', 'Up'), ('Down', 'Down')])
    vat_id = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return f"Ecommerce Transaction {self.transaction_id} - {self.status}"

class Transaction(models.Model):
    affiliate = models.ForeignKey(Affiliate, on_delete=models.SET_NULL, null=True, related_name='transactions')
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    commission = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Transaction {self.id} - {self.amount}"

class Commission(models.Model):
    affiliate = models.ForeignKey(Affiliate, on_delete=models.CASCADE, related_name='commissions')
    transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE, related_name='commissions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Commission {self.id} - {self.amount}"

class Click(models.Model):
    affiliate = models.ForeignKey(Affiliate, on_delete=models.CASCADE, related_name='clicks')
    ip_address = models.CharField(max_length=45)  # Accommodate both IPv4 and IPv6
    user_agent = models.CharField(max_length=255, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Click at {self.timestamp} by IP {self.ip_address}"

class CustomAffiliateLink(models.Model):
    affiliate = models.ForeignKey(Affiliate, on_delete=models.CASCADE, related_name='custom_links')
    custom_url = models.URLField(max_length=2048)
    description = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.custom_url} - {self.description if self.description else 'No Description'}"        


class CustomUser(models.Model):
    profile_image = models.ImageField(upload_to='user_profiles/', blank=True, null=True,
                                      help_text="User's profile picture")
    name = models.CharField(max_length=100, help_text="User's name")
    email = models.EmailField(unique=True, help_text="User's email address")
    created_at = models.DateTimeField(default=timezone.now, help_text="The date and time when the account was created")
    account_status = models.CharField(max_length=10, choices=(('Active', 'Active'), ('Inactive', 'Inactive')),
                                      default='Active', help_text="User's account status")
    bacodo_user = models.BooleanField(default=False, help_text="Bacodo User")

    def __str__(self):
        return f"{self.name} - {self.email}"


class Product(models.Model):
    STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Published', 'Published'),
        ('Scheduled', 'Scheduled')
    ]
    VISIBILITY_CHOICES = [
        ('MainWebsite', 'Main Website'),
        ('Hidden', 'Hidden'),
    ]
    TYPE_CHOICES = [
        ('Simple', 'Simple'),
        ('Configurable', 'Configurable')
    ]
    SHIPPING_STATUS_CHOICES = [
        ('YES', 'Yes'),  # Available for shipping
        ('NO', 'No'),    # Not available for shipping
    ]

    shipping_status = models.CharField(
        max_length=3,
        choices=SHIPPING_STATUS_CHOICES,
        default='NO',  # Sets the default to "NO"
        null=True,     # Allows database to store NULL if field is left blank
        blank=True,    # Allows form to submit field as blank
    )
    
    visibility = models.CharField(max_length=12, choices=VISIBILITY_CHOICES, default='MainWebsite')
    product_type = models.CharField(max_length=12, choices=TYPE_CHOICES, default='Simple')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Draft')
    best_selling = models.BooleanField(default=False, null=True)
    featured = models.BooleanField(default=False, null=True)
    name = models.ForeignKey('ProductName', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    product_sku = models.ForeignKey('ProductSKU', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    sku = models.CharField(max_length=255, unique=True, default='temporary_default_sku')
    brand = models.ForeignKey('Brand', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    store = models.ForeignKey('Store', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    video = models.ForeignKey('Video', on_delete=models.SET_NULL, null=True, blank=True, related_name='products') 
    image = models.CharField(max_length=255, blank=True, null=True)
    gallery_image = models.TextField(blank=True, null=True)
    category = models.ForeignKey('Category', related_name='products', on_delete=models.CASCADE)
    subcategory = models.ForeignKey('SubCategory', related_name='products', on_delete=models.CASCADE, null=True, blank=True)
    manufacturer_name = models.CharField(max_length=100, blank=True, null=True)
    price = models.ForeignKey('Price', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    special_price = models.ForeignKey('SpecialPrice', on_delete=models.SET_NULL, null=True, blank=True, related_name='products_special_price')
    color = models.ForeignKey('Color', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    size = models.ForeignKey('Size', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    type = models.ForeignKey('Type', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    option = models.ForeignKey('Option', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    details = models.ForeignKey('Details', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    stock = models.ForeignKey('Stock', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    sold = models.ForeignKey('Sold', on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    publish_date = models.DateTimeField(null=True, blank=True)
    tags = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    short_description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Product {self.id}"

class ProductRelationship(models.Model):
    parent = models.ForeignKey('Product', related_name='parent_product', on_delete=models.CASCADE)
    child = models.ForeignKey('Product', related_name='child_products', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.parent.title} -> {self.child.title}'

    class Meta:
        unique_together = (('parent', 'child'),)



class PaymentDetail(models.Model):
    payment_method = models.CharField(max_length=20)
    cardholder_name = models.CharField(max_length=100)
    card_number = models.CharField(max_length=16)
    total_pay = models.DecimalField(max_digits=10, decimal_places=2)
    invoice = models.OneToOneField(Invoice, on_delete=models.CASCADE, primary_key=True)


class CurrencyRate(models.Model):
    currency_name = models.CharField(max_length=100)
    usd_rate = models.DecimalField(max_digits=10, decimal_places=6)
    exchange_type = models.CharField(max_length=50)
    exchange_rate = models.DecimalField(max_digits=10, decimal_places=6)




class Seller(models.Model):
    name = models.CharField(max_length=255)
    web_url = models.URLField(max_length=200)
    contact_email = models.EmailField(max_length=100)
    location = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='seller_logos/', blank=True, null=True)
    since_year = models.IntegerField()

    def __str__(self):
        return self.name


class Shipment(models.Model):
    STATUS_CHOICES = [
        ('Pickups', 'Pickups'),
        ('Pending', 'Pending'),
        ('Shipping', 'Shipping'),
        ('Delivered', 'Delivered'),
        ('Out Of Delivery', 'Out Of Delivery'),
    ]

    shipment_no = models.CharField(max_length=20, unique=True)
    order_id = models.CharField(max_length=20)
    customer_name = models.CharField(max_length=100)
    supplier_name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    order_date = models.DateTimeField()
    arrival_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.shipment_no



class EventOrder(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    customer_name = models.CharField(max_length=255)
    order_date = models.DateField()
    payment = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='new')

    def __str__(self):
        return self.customer_name


class Coupon(models.Model):
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Expired', 'Expired'),
    ]

    # Assuming discount can be either fixed amount or percentage, hence using CharField
    discount = models.CharField(max_length=100)
    title = models.CharField(max_length=255, verbose_name='Coupon Title')
    code = models.CharField(max_length=50, unique=True)
    product_type = models.CharField(max_length=255, verbose_name='Product Type')
    start_date = models.DateField(default=datetime.date.today)
    end_date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Active')

    def __str__(self):
        return self.title


class Review(models.Model):
    # Loại bỏ khóa ngoại đến Product và CustomUser ở đây để tạo độc lập
    rating = models.PositiveSmallIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class ReviewImage(models.Model):
    # Giữ model này đơn giản, không cần khóa ngoại trực tiếp tới Review tại thời điểm tạo
    image = models.ImageField(upload_to='images/products')


class ReviewDetail(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='details')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='review_details')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='review_details')
    image = models.ForeignKey(ReviewImage, on_delete=models.CASCADE, related_name='details', null=True, blank=True)


class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    PAYMENT_METHOD_CHOICES = [
        ('credit_card', 'Credit Card'),
        ('paypal', 'PayPal'),
        ('bank_transfer', 'Bank Transfer'),
        ('cod', 'Cash on Delivery'),
        ('apple_pay', 'Apple Pay'),
        ('google_pay', 'Google Pay'),
        ('stripe', 'Stripe'),
    ]
    
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES, default='credit_card')
    total_amount = models.DecimalField(max_digits=12, decimal_places=2)
    created_at = models.DateTimeField(default=timezone.now)
    billing_address = models.TextField()
    shipping_address = models.TextField()
    
    def __str__(self):
        return f'Order {self.id} - {self.customer.username}'

    # Thêm bất kỳ thông tin bổ sung nào cho đơn hàng ở đây, như ghi chú từ khách hàng, mã giảm giá, vv.

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('Product', on_delete=models.SET_NULL, null=True)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f'{self.quantity} of {self.product.title}'

class Notification(models.Model):
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='notifications')

    def __str__(self):
        return f'Notification for {self.user.username} at {self.created_at}'

@receiver(post_save, sender=Order)
def create_order_notification(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            message=f"New order received: {instance.id}",
            user=instance.customer
        )
