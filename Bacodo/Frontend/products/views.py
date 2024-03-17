from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from collections import defaultdict
from db.models import Product, Category,ProductName
from django.shortcuts import get_object_or_404
from django.urls import resolve
# Create your views here.

class ProducrsView(TemplateView):
    def get_context_data(self, **kwargs):
       context = super().get_context_data(**kwargs)
       # Lấy current URL từ request
       url = self.request.path_info
        # Giải quyết URL
       resolver_match = resolve(url)
        # Lấy slug từ kwargs của resolver
       product_slug = resolver_match.kwargs.get('slug')
       product_name = ProductName.objects.get(slug=product_slug)
       #print(product_name)
       products = Product.objects.filter(name=product_name)
       #print(product)
       context['products'] = products
       return context
    pass
 
# products

product_details_view = ProducrsView.as_view(template_name = 'products/product-details.html')
