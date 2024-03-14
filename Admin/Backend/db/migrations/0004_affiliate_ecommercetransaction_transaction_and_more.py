# Generated by Django 4.2.2 on 2024-03-12 12:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('db', '0003_color_details_option_price_productname_productsku_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Affiliate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('affiliate_code', models.CharField(max_length=255, unique=True)),
                ('level', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('parent_affiliate', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sub_affiliates', to='db.affiliate')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EcommerceTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_id', models.CharField(max_length=20)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('payment_method', models.CharField(max_length=100)),
                ('transaction_date', models.DateTimeField()),
                ('status', models.CharField(choices=[('Successful', 'Successful'), ('Pending', 'Pending'), ('Denied', 'Denied')], max_length=10)),
                ('client_name', models.CharField(blank=True, max_length=100, null=True)),
                ('client_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('transaction_type', models.CharField(choices=[('Up', 'Up'), ('Down', 'Down')], max_length=4)),
                ('vat_id', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('commission', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('affiliate', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='transactions', to='db.affiliate')),
                ('customer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='transactions', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CustomAffiliateLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('custom_url', models.URLField(max_length=2048)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('affiliate', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='custom_links', to='db.affiliate')),
            ],
        ),
        migrations.CreateModel(
            name='Commission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('paid', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('affiliate', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commissions', to='db.affiliate')),
                ('transaction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commissions', to='db.transaction')),
            ],
        ),
        migrations.CreateModel(
            name='Click',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=45)),
                ('user_agent', models.CharField(blank=True, max_length=255, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('affiliate', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clicks', to='db.affiliate')),
            ],
        ),
    ]
