from django.contrib import admin
from .models import *
# Register your models here.

# Movies
admin.site.register(Movies)
admin.site.register(MovieReviews)

# TVshows
admin.site.register(TVshows)
admin.site.register(TVshowReviews)