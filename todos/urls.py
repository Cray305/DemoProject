from rest_framework.routers import DefaultRouter
from .views import TodoViewSet, index_view
from django.urls import path, include

router = DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', index_view, name='index'),
]