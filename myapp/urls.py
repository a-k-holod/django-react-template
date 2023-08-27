from django.urls import path
from .views import ItemList
from django.views.generic import TemplateView


urlpatterns = [
    path('api/items/', ItemList.as_view(), name='item-list'),
#     path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
