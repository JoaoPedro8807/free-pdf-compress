from django.urls import path, include
from . import views

urlpatterns = [
    path(
        '',
        views.CompressView.as_view(),
        name='compress'
        )
]