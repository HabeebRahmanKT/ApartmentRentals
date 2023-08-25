from django.urls import path
from . import views

urlpatterns = [
    path('', views.index)            # Root of the app
]
