# models.py
from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    imgUrl = models.ImageField(upload_to='blog-images/')
    description = models.TextField()
    quote = models.TextField()

    def __str__(self):
        return self.title
