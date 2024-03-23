from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from collections import defaultdict
from db.models import Product, Category
import requests 

class DashboardView(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        

        # Fetch data from the API
        product_home_api_url = "http://103.190.38.50:8081/homepage/homepage/"
        try:
            response = requests.get(product_home_api_url)
            response.raise_for_status()  # Raise an exception for error status codes
            api_data = response.json()
            context['api_datas'] = api_data
        except requests.exceptions.RequestException as e:
            # Handle potential API errors
            context['api_error'] = f"API Error: {e}" 
         # Fetch data from the API
        catagory_api_url = "http://103.190.38.50:8081/homepage/categories/"
        try:
            response = requests.get(catagory_api_url)
            response.raise_for_status()  # Raise an exception for error status codes
            catagory_home_page_api_datas = response.json()
            context['catagory_home_page_api_datas'] = catagory_home_page_api_datas
        except requests.exceptions.RequestException as e:
            # Handle potential API errors
            context['api_error'] = f"API Error: {e}" 
        catagory_menu_api_url = "http://103.190.38.50:8081/catalogdetails/"
        try:
            response = requests.get(catagory_menu_api_url)
            response.raise_for_status()  # Raise an exception for error status codes
            catagory_menu_api_datas = response.json()
            context['catagory_menu_api_datas'] = catagory_menu_api_datas
        except requests.exceptions.RequestException as e:
            # Handle potential API errors
            context['api_error'] = f"API Error: {e}" 
        return context
    pass  # Remove the unnecessary 'pass'
dashboard_view = DashboardView.as_view(template_name = 'dashboard/index.html')
watch_main_layout_view = DashboardView.as_view(template_name = 'dashboard/watch-main-layout.html')
modern_fashion_view = DashboardView.as_view(template_name = 'dashboard/modern-fashion.html')
trend_fashion_view = DashboardView.as_view(template_name = 'dashboard/trend-fashion.html')

contact_us_view = DashboardView.as_view(template_name = 'dashboard/contact-us.html')