from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from django.db.models import Prefetch
from db.models import Product, ProductName, ChildProduct, Color, Size, Type, Option, Details, ShippingLocation

class ProductsView(TemplateView):
    template_name = 'products/product-details.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        product_slug = self.kwargs.get('slug')
        product_name = get_object_or_404(ProductName, slug=product_slug)

        # Sử dụng Prefetch để tối ưu hóa việc truy vấn dữ liệu liên quan
        child_prefetch = Prefetch('child_products', queryset=ChildProduct.objects.select_related('color', 'size', 'type', 'option', 'details', 'shipping_location'))
        products = Product.objects.filter(name=product_name).prefetch_related(child_prefetch)

        for product in products:
            # Gán giá và giá đặc biệt từ sản phẩm con đầu tiên
            first_child = product.child_products.first()
            product.first_child_price = first_child.price if first_child else None
            product.first_child_special_price = first_child.special_price if first_child else None

            # Tạo danh sách thuộc tính từ tất cả sản phẩm con
            product.child_attributes = {
                'colors': set(child.color.name for child in product.child_products.all() if child.color),
                'sizes': set(child.size.name for child in product.child_products.all() if child.size),
                'types': set(child.type.name for child in product.child_products.all() if child.type),
                'options': set(child.option.name for child in product.child_products.all() if child.option),
            }

        context['products'] = products
        return context

product_details_view = ProductsView.as_view()
