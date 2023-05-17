# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-%6t40s58imuvz8r8-(09w64&*b&qtc!06ttvcbq&#m8-*bb&ht'



# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'vacation_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'Password10'
    }
}