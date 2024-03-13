from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from collections import defaultdict
from db.models import Product, Category
# Create your views here.

class DashboardView(TemplateView):
   def get_context_data(self, **kwargs):
       context = super().get_context_data(**kwargs)
       categories = Category.objects.all()
       products = Product.objects.all()[:10]  # Eager Loading
       category_products = defaultdict(list)
       #print(products)
       for product in products:
           #print(product)
           category = product.category
          # print(category)
           category_products[category].append(product)
       context['categories'] = categories
       context['category_products'] = category_products
       return context
   pass


dashboard_view = DashboardView.as_view(template_name = 'dashboard/index.html')
watch_main_layout_view = DashboardView.as_view(template_name = 'dashboard/watch-main-layout.html')
modern_fashion_view = DashboardView.as_view(template_name = 'dashboard/modern-fashion.html')
trend_fashion_view = DashboardView.as_view(template_name = 'dashboard/trend-fashion.html')



contact_us_view = DashboardView.as_view(template_name = 'dashboard/contact-us.html')