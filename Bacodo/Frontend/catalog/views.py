from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from db.models import Product, Category,ProductName,SubCategory
from django.urls import resolve
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
# Create your views here.
#LoginRequiredMixin,
class catalog(TemplateView):
     def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Lấy current URL từ request
        url = self.request.path_info
        # Giải quyết URL
        resolver_match = resolve(url)
        # Lấy slug từ kwargs của resolver
        catalog_slug = resolver_match.kwargs.get('slug')
        
        try:
            subcategory = SubCategory.objects.get(slug=catalog_slug)
            products = Product.objects.filter(subcategory=subcategory)
        except SubCategory.DoesNotExist:
            category = get_object_or_404(Category, slug=catalog_slug)
            products = Product.objects.filter(category=category)

        # Phân trang
        paginator = Paginator(products, 10)  # Hiển thị 10 sản phẩm trên mỗi trang
        page = self.request.GET.get('page')  # Lấy tham số 'page' từ URL

        try:
            products = paginator.page(page)
        except PageNotAnInteger:
            products = paginator.page(1)  # Trang đầu tiên
        except EmptyPage:
            products = paginator.page(paginator.num_pages)  # Trang cuối

        context['products'] = products
        return context
     pass

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
