from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from collections import defaultdict
from db.models import Product, Category
import requests 

class DashboardView(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        categories = Category.objects.all()
        products_by_category = []

        for category in categories:
            products = Product.objects.filter(category_id=category.id)[:10] 
            if products: 
                products_by_category.append((category, products))

        # Fetch data from the API
        api_url = "http://103.190.38.50:8081/homepage/"
        try:
            response = requests.get(api_url)
            response.raise_for_status()  # Raise an exception for error status codes
            api_data = response.json()
            context['api_datas'] = api_data
        except requests.exceptions.RequestException as e:
            # Handle potential API errors
            context['api_error'] = f"API Error: {e}" 

        context['categories'] = categories
        context['products_by_category'] = products_by_category
        return context
    pass  # Remove the unnecessary 'pass'
dashboard_view = DashboardView.as_view(template_name = 'dashboard/index.html')
watch_main_layout_view = DashboardView.as_view(template_name = 'dashboard/watch-main-layout.html')
modern_fashion_view = DashboardView.as_view(template_name = 'dashboard/modern-fashion.html')
trend_fashion_view = DashboardView.as_view(template_name = 'dashboard/trend-fashion.html')

contact_us_view = DashboardView.as_view(template_name = 'dashboard/contact-us.html')