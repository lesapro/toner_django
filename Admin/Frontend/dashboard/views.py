from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from collections import defaultdict
from db.models import Product, Category
from django.shortcuts import get_object_or_404
# Create your views here.

class DashboardView(TemplateView):
   def get_context_data(self, **kwargs):
       context = super().get_context_data(**kwargs)
       categories = Category.objects.all()
       products_by_category = []
       for category in categories:
         #print(category.id)
         products = Product.objects.filter(category_id=category.id)[:8]  # Limit to 10
         if products:  # Kiểm tra xem có sản phẩm nào hay không
            products_by_category.append((category, products))
       context['categories'] = categories
       context['products_by_category'] = products_by_category
       return context
   pass


dashboard_view = DashboardView.as_view(template_name = 'dashboard/index.html')
watch_main_layout_view = DashboardView.as_view(template_name = 'dashboard/watch-main-layout.html')
modern_fashion_view = DashboardView.as_view(template_name = 'dashboard/modern-fashion.html')
trend_fashion_view = DashboardView.as_view(template_name = 'dashboard/trend-fashion.html')



contact_us_view = DashboardView.as_view(template_name = 'dashboard/contact-us.html')