from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from db.models import Product
# Create your views here.

class DashboardView(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Truy vấn dữ liệu từ model của ứng dụng khác
        context['products'] = Product.objects.all()
        return context
    pass

dashboard_view = DashboardView.as_view(template_name = 'dashboard/index.html')
watch_main_layout_view = DashboardView.as_view(template_name = 'dashboard/watch-main-layout.html')
modern_fashion_view = DashboardView.as_view(template_name = 'dashboard/modern-fashion.html')
trend_fashion_view = DashboardView.as_view(template_name = 'dashboard/trend-fashion.html')



contact_us_view = DashboardView.as_view(template_name = 'dashboard/contact-us.html')