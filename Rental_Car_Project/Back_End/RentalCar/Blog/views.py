# views.py
from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer

class BlogListView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
