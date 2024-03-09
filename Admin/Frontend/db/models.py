from django.db import models
import datetime
from django.utils import timezone
from django.conf import settings
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver


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


from django.utils.text import slugify


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


class Attribute(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class AttributeValue(models.Model):
    attribute = models.ForeignKey(Attribute, related_name='values', on_delete=models.CASCADE)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.attribute.name}: {self.value}"


class Country(models.Model):
    country_code = models.CharField(max_length=2)
    country_name = models.CharField(max_length=255)

    def __str__(self):
        return self.country_name


class ShippingLocation(models.Model):
    location_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return self.location_name


class ShippingCost(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.amount}"


class ShippingTime(models.Model):
    duration = models.CharField(max_length=255)

    def __str__(self):
        return self.duration


class ShippingMethod(models.Model):
    method_name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.method_name


# Đảm bảo rằng bạn có mô hình Product tương ứng hoặc thay thế `product` field bên dưới
# với mối quan hệ đúng với mô hình sản phẩm của bạn.

class ShippingDetail(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)  # Thay 'Product' với mô hình sản phẩm của bạn
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    shipping_from = models.ForeignKey(ShippingLocation, on_delete=models.CASCADE)
    cost = models.ForeignKey(ShippingCost, on_delete=models.CASCADE)
    time = models.ForeignKey(ShippingTime, on_delete=models.CASCADE)
    method = models.ForeignKey(ShippingMethod, on_delete=models.CASCADE)

    def __str__(self):
        return f"Shipping Detail for {self.product_id}"


class Brand(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='brand_logos/', blank=True, null=True)
    items_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class Product(models.Model):
    STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Published', 'Published'),
        ('Scheduled', 'Scheduled')
    ]
    VISIBILITY_CHOICES = [
        ('MainWebsite', 'Main Website'),  # Hiển thị trên trang chính của website và có mặt trong kết quả tìm kiếm
        ('Hidden', 'Hidden'),  # Không hiển thị
    ]
    visibility = models.CharField(max_length=12, choices=VISIBILITY_CHOICES, default='MainWebsite')
    TYPE_CHOICES = [
        ('Simple', 'Simple'),
        ('Configurable', 'Configurable')
    ]
    product_type = models.CharField(max_length=12, choices=TYPE_CHOICES, default='Simple')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Draft')
    best_selling = models.BooleanField(default=False, null=True)
    featured = models.BooleanField(default=False, null=True)
    title = models.CharField(max_length=255)
    sku = models.CharField(max_length=100, null=False, unique=True, default='DEFAULT_SKU')
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    video_url = models.URLField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='images/products/', blank=True, null=True)
    gallery_image = models.ImageField(upload_to='images/products/', blank=True, null=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    subcategory = models.ForeignKey(SubCategory, related_name='products', on_delete=models.CASCADE, null=True)
    manufacturer_name = models.CharField(max_length=100, blank=True, null=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    special_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    stock = models.IntegerField(default=0, null=True)
    sold = models.IntegerField(default=0, null=True)
    colors = models.ManyToManyField(AttributeValue, related_name='products_colors', blank=True)
    sizes = models.ManyToManyField(AttributeValue, related_name='products_sizes', blank=True)
    publish_date = models.DateTimeField(null=True, blank=True)
    tags = models.CharField(max_length=255, blank=True)
    description = models.TextField(null=True)
    short_description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Product {self.id}"


class ProductRelationship(models.Model):
    parent = models.ForeignKey(Product, related_name='parent_product', on_delete=models.CASCADE)
    child = models.ForeignKey(Product, related_name='child_products', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.parent.title} -> {self.child.title}'


class ProductGalleryImage(models.Model):
    product = models.ForeignKey(Product, related_name='gallery_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/products')

    def __str__(self):
        return f"{self.product.title} Gallery Image"


class ProductAttributeDetail(models.Model):
    product = models.ForeignKey(Product, related_name='attribute_details', on_delete=models.CASCADE)
    attribute_value = models.ForeignKey(AttributeValue, related_name='product_details', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.title} - {self.attribute_value}"


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


class Transaction(models.Model):
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
