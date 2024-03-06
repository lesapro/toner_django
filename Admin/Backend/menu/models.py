from django.db import models
import datetime
from django.utils import timezone
from django.conf import settings
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
    image = models.ImageField(upload_to='categories/', blank=True, null=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Published', 'Published'),
        ('Scheduled', 'Scheduled')
    ]
    VISIBILITY_CHOICES = [
        ('Public', 'Public'),
        ('Hidden', 'Hidden')
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    manufacturer_name = models.CharField(max_length=100, blank=True, null=True)
    manufacturer_brand = models.CharField(max_length=100, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)  # as percentage
    stock = models.IntegerField()
    orders = models.IntegerField(default=0)
    colors = models.CharField(max_length=255, blank=True)  # Assuming a simple representation for colors as comma-separated values
    sizes = models.CharField(max_length=255, blank=True)  # Assuming a simple representation for sizes as comma-separated values
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Draft')
    visibility = models.CharField(max_length=10, choices=VISIBILITY_CHOICES, default='Public')
    publish_date = models.DateTimeField(null=True, blank=True)
    tags = models.CharField(max_length=255, blank=True)  # Assuming a simple representation for tags as comma-separated values
    short_description = models.TextField(blank=True, null=True)
    # Add more fields according to your requirements

    def __str__(self):
        return self.title

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



class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="subcategories")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title  

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
class Brand(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='brand_logos/', blank=True, null=True)
    items_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name  

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
    # Linking to the user who made the review; assumes you have user authentication
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reviews')
    rating = models.PositiveSmallIntegerField(help_text="Rating from 1 to 5 stars")
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Review by {self.user.username} - {self.rating} Stars"

class SimpleReview(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to='user_avatars/', blank=True, null=True)
    rating = models.PositiveSmallIntegerField(help_text="Rating from 1 to 5 stars")
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Review by {self.name} - {self.rating} Stars"        

class CustomUser(models.Model):
    profile_image = models.ImageField(upload_to='user_profiles/', blank=True, null=True, help_text="User's profile picture")
    name = models.CharField(max_length=100, help_text="User's name")
    email = models.EmailField(unique=True, help_text="User's email address")
    created_at = models.DateTimeField(default=timezone.now, help_text="The date and time when the account was created")
    account_status = models.CharField(max_length=10, choices=(('Active', 'Active'), ('Inactive', 'Inactive')), default='Active', help_text="User's account status")

    def __str__(self):
        return f"{self.name} - {self.email}"                