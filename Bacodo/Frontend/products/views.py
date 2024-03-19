from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from django.db.models import Prefetch, Subquery, OuterRef
from db.models import Product, ProductName, ChildProduct, Color, Size, Option, Details

class ProductsView(TemplateView):
    template_name = 'products/product-details.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        product_slug = self.kwargs.get('slug')
        product_name = get_object_or_404(ProductName, slug=product_slug)

        products = Product.objects.filter(name=product_name).prefetch_related(
            'child_products__color',
            'child_products__size',
            'child_products__option',
            'child_products__details'
        )

        # Đối với mỗi Product, lấy ChildProduct đầu tiên và gán vào thuộc tính mới
        for product in products:
            product.first_child_product = product.child_products.first() if product.child_products.exists() else None

            if hasattr(product, 'gallery_image') and product.gallery_image:
                product.gallery_images = product.gallery_image.split(',')
            else:
                product.gallery_images = []

        context['products'] = products
        return context

product_details_view = ProductsView.as_view()

