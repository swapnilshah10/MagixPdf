from django.urls import path
from .views import *

urlpatterns = [
    path('merge/' , merge_file , name='merge'),
    path('reduce/' , reduce_file , name='reduce'),
    path('upload/' , upload_file , name='upload'),
    path('read/' , read_file , name='read'),
    path('image/' , image_extractor , name='image')
]