from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from db.models import Product, Category,ProductName,SubCategory
from django.urls import resolve
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
# Create your views here.
#LoginRequiredMixin,
class user(TemplateView):
     pass


 
# others
sign_up_view = user.as_view(template_name = 'user/auth-signup-basic.html')
sign_in_view = user.as_view(template_name = 'user/auth-signin-basic.html')
password_reset_view = user.as_view(template_name = 'users/auth-pass-reset-basic.html')
error404_view = user.as_view(template_name = 'user/auth-404.html')
