from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from django.db.models import Prefetch
from db.models import Product, ProductName, ChildProduct, Color, Size, Type, Option, Details, ShippingLocation, ShippingDetail

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
            # Tạo danh sách thuộc tính từ tất cả sản phẩm con, bao gồm details
            product.child_attributes = {
                'colors': set((child.color.name, child.color.hex) for child in product.child_products.all() if child.color),
                'sizes': set(child.size.name for child in product.child_products.all() if child.size),
                'types': set(child.type.name for child in product.child_products.all() if child.type),
                'options': set(child.option.name for child in product.child_products.all() if child.option),
                'details': set(child.details.name for child in product.child_products.all() if child.details),
                'shipping_locations': set((child.shipping_location.location_name, child.shipping_location.location_code) for child in product.child_products.all() if child.shipping_location),
            }
            product.children_info = [
                {
                    'sku': child.child_sku,
                    'price': child.price,
                    'special_price': child.special_price,
                    'image': child.image.url if child.image else None,  # Đảm bảo hình ảnh tồn tại
                    'color': child.color.name if child.color else '',
                    'size': child.size.name if child.size else '',
                    'stock': child.stock,
                    'sold': child.sold,

                }
                for child in product.child_products.all()
            ]

            # Xử lý hình ảnh gallery
            if hasattr(product, 'gallery_image') and product.gallery_image:
                product.gallery_images = product.gallery_image.split(',')
            else:
                product.gallery_images = []
            # Tính tổng số lượng hàng tồn của tất cả sản phẩm con
            total_stock = sum(child.stock for child in product.child_products.all())
            product.total_stock = total_stock  # Thêm tổng số lượng hàng tồn vào thuộc tính của sản phẩm
            # Thêm thông tin ShippingDetail
            shipping_details = ShippingDetail.objects.filter(product=product).select_related('cost', 'time', 'method')
            product.shipping_details = [{
                'cost': detail.cost.amount,
                'time': detail.time.duration,
                'method': detail.method.method_name
            } for detail in shipping_details]
            
        context['products'] = products
        return context

product_details_view = ProductsView.as_view()
