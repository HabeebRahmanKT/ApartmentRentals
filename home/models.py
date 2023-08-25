from django.db import models


class Apartment(models.Model):
    price = models.FloatField()
    address = models.CharField(max_length=100)
    image_urls = []