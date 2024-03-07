import json

from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from db.models import Product, Category,SubCategory
from .forms import *
# Create your views here.

class MenuView(TemplateView):
    pass

dashboard_view = MenuView.as_view(template_name = "menu/index.html") 

# product
class ProductView(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.all()
        context['categories'] = Category.objects.all()
        return context
product_list_view = ProductView.as_view(template_name = "menu/products/product-list.html")
product_grid_view = ProductView.as_view(template_name = "menu/products/product-grid.html")
product_overview_view = MenuView.as_view(template_name = "menu/products/product-overview.html") 
product_create_view = MenuView.as_view(template_name = "menu/products/product-create.html")


class CategoryView(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.all()
        return context
categories_view = CategoryView.as_view(template_name = "menu/products/categories.html")


class SubCategoryView(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['subcategories'] = SubCategory.objects.all()
        context['form'] = SubCategoryForm()
        return context

    def post(self, request, *args, **kwargs):
        data = request.POST
        form = SubCategoryForm(request.POST)
        if data['id'] != "":
            try:
                obj= SubCategory.objects.get(id=data['id'])
                form = SubCategoryForm(request.POST,instance=obj)
            except Exception as e:
                return render(request, self.template_name, {'form': form})
        if form.is_valid():
                form.save()
                return redirect('menu:product.sub_categories')  # Điều hướng người dùng đến trang danh sách sub-categories hoặc bất kỳ trang nào khác
        else:
            return render(request, self.template_name, {'form': form})

    def delete(self, request, *args, **kwargs):
        pk = json.loads(request.body)['id']
        try:
            subcategory = SubCategory.objects.get(pk=pk)
            subcategory.delete()
            return JsonResponse({'message': 'Subcategory deleted successfully'}, status=204)
        except SubCategory.DoesNotExist:
            return JsonResponse({'error': 'Subcategory not found'}, status=404)


sub_categories_view = SubCategoryView.as_view(template_name = "menu/products/sub-categories.html")

# orders
orders_list_view = MenuView.as_view(template_name = "menu/orders/orders-list-view.html") 
orders_overview_view = MenuView.as_view(template_name = "menu/orders/orders-overview.html") 

calendar_view = MenuView.as_view(template_name = "menu/calendar.html") 

# sellers
seller_list_view = MenuView.as_view(template_name = "menu/sellers/sellers-list-view.html") 
seller_grid_view = MenuView.as_view(template_name = "menu/sellers/sellers-grid-view.html") 
seller_overview_view = MenuView.as_view(template_name = "menu/sellers/seller-overview.html") 

# invoice
invoice_list_view = MenuView.as_view(template_name = "menu/invoice/invoices-list.html") 
invoice_details_view = MenuView.as_view(template_name = "menu/invoice/invoices-details.html") 
invoice_create_view = MenuView.as_view(template_name = "menu/invoice/invoices-create.html") 

users_list_view = MenuView.as_view(template_name = "menu/users-list.html") 

# shipping
shipping_list_view = MenuView.as_view(template_name = "menu/shipping/shipping-list.html") 
shipments_view = MenuView.as_view(template_name = "menu/shipping/shipments.html") 

coupons_view = MenuView.as_view(template_name = "menu/coupons.html") 

reviews_rating_view = MenuView.as_view(template_name = "menu/reviews-ratings.html") 

brands_view = MenuView.as_view(template_name = "menu/brands.html") 

statistics_view = MenuView.as_view(template_name = "menu/statistics.html") 

transactions_view = MenuView.as_view(template_name = "menu/localization/transactions.html") 

currency_rates_view = MenuView.as_view(template_name = "menu/localization/currency-rates.html") 
