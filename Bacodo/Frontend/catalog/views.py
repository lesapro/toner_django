from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from db.models import Product, Category, ProductName, SubCategory, ChildProduct, Color, Size, Type, Option, Details, ShippingLocation  
from django.urls import resolve
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Prefetch
from django.db.models import Min, Max
from decimal import Decimal
from django.db.models import Q

from db.models import Product, Category, SubCategory, Color, Size, Type, Option, Details, ShippingLocation

class catalog(TemplateView):

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        url = self.request.path_info
        resolver_match = resolve(url)
        catalog_slug = resolver_match.kwargs.get('slug')
        parent_products = Product.objects.none()
        child_products_qs = ChildProduct.objects.none()

        # Determine if a catalog (category) or a subcategory based on URL
        if SubCategory.objects.filter(slug=catalog_slug).exists():
            subcategory = SubCategory.objects.get(slug=catalog_slug)
            parent_products = Product.objects.filter(subcategory=subcategory)
            child_products_qs = ChildProduct.objects.filter(parent__subcategory=subcategory)
        elif Category.objects.filter(slug=catalog_slug).exists():
            category = Category.objects.get(slug=catalog_slug)
            parent_products = Product.objects.filter(category=category)
            child_products_qs = ChildProduct.objects.filter(parent__category=category)

        # Your existing filtering logic here

        # Update context with filtered attributes
        context.update({
            'products': self.get_paginated_products(parent_products, self.request.GET.get('page')),
            'colors': Color.objects.filter(child_products__in=child_products_qs).distinct(),
            'sizes': Size.objects.filter(child_products__in=child_products_qs).distinct(),
            'types': Type.objects.filter(child_products__in=child_products_qs).distinct(),
            'options': Option.objects.filter(child_products__in=child_products_qs).distinct(),
            'details': Details.objects.filter(child_products__in=child_products_qs).distinct(),
            'shipping_locations': ShippingLocation.objects.filter(child_products__in=child_products_qs).distinct(),
        })

        return context

    def get_paginated_products(self, queryset, page):
        paginator = Paginator(queryset, 60)  # Show 10 products per page
        try:
            products = paginator.page(page)
        except PageNotAnInteger:
            products = paginator.page(1)
        except EmptyPage:
            products = paginator.page(paginator.num_pages)
        return products
# men
clothing_view = catalog.as_view(template_name = 'catalog/product-grid-sidebar-banner.html')
watches_view = catalog.as_view(template_name = 'catalog/product-grid-right.html')
bag_luggage_view = catalog.as_view(template_name = 'catalog/product-list-left.html')
footwear_view = catalog.as_view(template_name = 'catalog/product-grid-right.html')
innerwear_view = catalog.as_view(template_name = 'catalog/product-list.html')
other_accessories_view = catalog.as_view(template_name = 'catalog/product-list-right.html')

# women
western_wear_view = catalog.as_view(template_name = 'catalog/product-list-defualt.html')
handbags_clutches_view = catalog.as_view(template_name = 'catalog/product-list-left.html')
lingerie_nightwear_view = catalog.as_view(template_name = 'catalog/product-grid-right.html')
women_footwear_view = catalog.as_view(template_name = 'catalog/product-grid-sidebar-banner.html')
fashion_silver_Jewellery_view = catalog.as_view(template_name = 'catalog/product-grid-defualt.html')

# accessories & others
home_kitchen_pets_view = catalog.as_view(template_name = 'catalog/product-grid-right.html')
beauty_health_grocery_view = catalog.as_view(template_name = 'catalog/product-list-left.html')
sports_fitness_bags_luggage_view = catalog.as_view(template_name = 'catalog/product-grid-sidebar-banner.html')
car_motorbike_industrial_view = catalog.as_view(template_name = 'catalog/product-list.html')
books_view = catalog.as_view(template_name = 'catalog/product-list-right.html')
 
# others
sign_up_view = catalog.as_view(template_name = 'catalog/auth-signup-basic.html')
sign_in_view = catalog.as_view(template_name = 'catalog/auth-signin-basic.html')
password_reset_view = catalog.as_view(template_name = 'catalog/auth-pass-reset-basic.html')
error404_view = catalog.as_view(template_name = 'catalog/auth-404.html')
