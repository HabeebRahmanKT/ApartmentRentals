from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'view_details/index.html')
