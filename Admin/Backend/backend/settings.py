"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 4.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os
from django.contrib.messages import constants as messages

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-0hu17va3g=$dothz@_s3-l1---65oe7^31)3u5&6=i$*@46ou8'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    
    'menu',
    'myaccounts',
    
    # all auth
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    
     # Crispy Forms
    "crispy_forms",
    "crispy_bootstrap5",
    
    
    # Google Providers
   
    'multiselectfield',
    'allauth.socialaccount.providers.google',
    
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',   
    "allauth.account.middleware.AccountMiddleware",
    
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,"templates")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'toner2',
        'USER': 'root',
        'PASSWORD': 'Lamgiau@123!',
        'HOST': '103.190.38.50',  # Hoặc địa chỉ IP của máy chủ cơ sở dữ liệu
        'PORT': '5432',       # Cổng mặc định của PostgreSQL
    }
}



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR,"static")]

MEDIA_ROOT = os.path.join(BASE_DIR,'media')
MEDIA_URL = '/media/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


AUTHENTICATION_BACKENDS = [

    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
   
]

SITE_ID = 1

# Provider Configurations
SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'APP':{
            'client_id':"",
            'secret':"",
            'key':""
        },
        'SCOPE':[ 
            'profile',
            'email',
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        }
    }
}


MESSAGE_TAGS = {
    messages.DEBUG: "alert-info",
    messages.INFO: "alert-info",
    messages.SUCCESS: "alert-success",
    messages.WARNING: "alert-warning",
    messages.ERROR: "alert-danger",
}


# SMTP Configure
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.mailtrap.io"
EMAIL_PORT = 2525
EMAIL_USE_TLS = True
EMAIL_HOST_USER = ""
EMAIL_HOST_PASSWORD = ""
DEFAULT_FROM_EMAIL = ""

#  All Auth Configurations

LOGIN_REDIRECT_URL = "/"
LOGIN_URL = "account_login"
ACCOUNT_LOGOUT_ON_GET = False
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = "mandatory"
ACCOUNT_AUTHENTICATED_LOGIN_REDIRECTS =True

SOCIALACCOUNT_QUERY_EMAIL = True
ACCOUNT_UNIQUE_EMAIL = True
SOCIALACCOUNT_LOGIN_ON_GET = True



# All Auth Forms Customization 
ACCOUNT_FORMS = {
    "login": "backend.forms.UserLoginForm",
    "signup": "backend.forms.UserRegistrationForm",
    "change_password": "backend.forms.PasswordChangeForm",
    "set_password": "backend.forms.PasswordSetForm",
    "reset_password": "backend.forms.PasswordResetForm",
    "reset_password_from_key": "backend.forms.PasswordResetKeyForm",
}


