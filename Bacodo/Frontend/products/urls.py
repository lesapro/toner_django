from django.urls import path
from products.views import (
    product_details_view,
)

app_name = "products"

urlpatterns = [
    
# products

    path('<slug:slug>/',view=product_details_view,name='products.product_details'),
    # grid-view

]