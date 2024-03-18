from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from collections import defaultdict
from db.models import Product, Category, ProductName, ChildProduct, Color, Size, Option, Details
from django.shortcuts import get_object_or_404
from django.urls import resolve
from django.db.models import Prefetch
# Create your views here.

class ProducrsView(TemplateView):
    def get_context_data(self, **kwargs):
       context = super().get_context_data(**kwargs)
       product_slug = self.kwargs.get('slug')
       product_name = get_object_or_404(ProductName, slug=product_slug)
       products = Product.objects.filter(name=product_name).prefetch_related(
           Prefetch(
               'child_products',
               queryset=ChildProduct.objects.select_related('color', 'size', 'option', 'details')[:1]
           )
       )
       context['products'] = products
       return context
    pass
 
# products

product_details_view = ProducrsView.as_view(template_name = 'products/product-details.html')
