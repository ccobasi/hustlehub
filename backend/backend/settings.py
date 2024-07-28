
from pathlib import Path
from datetime import timedelta
from dotenv import load_dotenv
import os
# import django_heroku
# import dj_database_url
import environ 

# env = environ.Env(
#     DEBUG=(bool, False),
# )

env_path = Path('.') / '.env'
load_dotenv(env_path)

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

environ.Env.read_env(BASE_DIR / '.env')


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')
# SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = os.getenv('DEBUG', default=False)
# DEBUG = env('DEBUG')

# Quick-start development settings - unsuitable for production
SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = os.getenv('DEBUG', default=False) == 'True'

ALLOWED_HOSTS = ["*"]

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    # "DEFAULT_PERMISSION_CLASSES": [
    #     "rest_framework.permissions.IsAuthenticated",
    # ],
    'DEFAULT_RENDERER_CLASSES':['rest_framework.renderers.JSONRenderer'],
    'DEFAULT_PARSER_CLASSES': ['rest_framework.parsers.JSONParser']
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    'AUTH_HEADER_TYPES': ('Bearer',),
}



# Application definition

INSTALLED_APPS = [
    "daphne",
    "channels",
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "user",
    "user_profile",
    "project",
    "proposal",
    "contract",
    "review",
    "notification",
    "rest_framework",
    'rest_framework_simplejwt.token_blacklist',
    "corsheaders",
]

ASGI_APPLICATION = 'backend.asgi.application'

# Set up the channel layers configuration (using in-memory layer for development)
CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels.layers.InMemoryChannelLayer',
    },
}

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_USER_MODEL = "user.User"

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

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
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'
STATICFILES_DIRS = [
	os.path.join(BASE_DIR, 'static')
]
# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# EMAIL_HOST = os.getenv('EMAIL_HOST')
# EMAIL_PORT = os.getenv('EMAIL_PORT')
# EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
# EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
# DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL')
# EMAIL_USE_TLS = True if os.getenv('EMAIL_USE_TLS', 'False').lower() == 'true' else False
# DEFAULT_FROM_EMAIL = f'HusslingHub {os.getenv("EMAIL_HOST_USER")}'  
# FRONTEND_URL = 'http://localhost:5173'
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'  # Update with your SMTP server
# EMAIL_PORT = 587  
# EMAIL_USE_TLS = True  
# EMAIL_HOST_USER = 'ccobasi8@gmail.com'
# EMAIL_HOST_PASSWORD ='ichhpspneutltdza'  
# DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'
# EMAIL_FROM = 'pythonlessons0@gmail.com'
# EMAIL_HOST_USER = 'pythonlessons0@gmail.com'
# EMAIL_HOST_PASSWORD = 'bsvdctbnvaqlszhd'
# EMAIL_PORT = 587
# EMAIL_USE_TLS = True

# PASSWORD_RESET_TIMEOUT = 14400

# CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWS_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5174",
    "http://localhost:5173",    
    "http://localhost:8000",
    "http://localhost:5175",
    "http://localhost:5176",
    "https://husslinghub.com",  
]
CSRF_TRUSTED_ORIGINS=[
    "http://localhost:8080",
    "http://127.0.0.1:5173/",
    "http://127.0.0.1:5174/",
    "http://localhost:5175",
    "http://localhost:5176",
    "http://localhost:8000",
]

print("CORS_ALLOWED_ORIGINS:", CORS_ALLOWED_ORIGINS)

CORS_DEBUG = True
CORS_LOGGER = "cors_logger"

GOOGLE_CLIENT_ID=os.getenv('GOOGLE_CLIENT_ID')
GOOGLE_CLIENT_SECRET=os.getenv('GOOGLE_CLIENT_SECRET')
SOCIAL_AUTH_PASSWORD=os.getenv("SOCIAL_AUTH_PASSWORD")


MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = 'media/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

