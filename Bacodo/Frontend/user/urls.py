from django.urls import path
from user.views import(    
    sign_up_view,
    sign_in_view,
    password_reset_view,
    error404_view,
)

app_name ='user'

urlpatterns = [   
    # others
    path('signup',view=sign_up_view,name='sign_up_view'),
    path('signin',view=sign_in_view,name='sign_in_view'),
    path('password_reset',view=password_reset_view,name='password_reset_view'),
    path('error404',view=error404_view,name='error404_view')
    
]