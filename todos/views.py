from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.shortcuts import render

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('-created_at')
    serializer_class = TodoSerializer

# Serve React App
index_view = never_cache(TemplateView.as_view(template_name='index.html'))
