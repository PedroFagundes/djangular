from django.conf.urls import url

from contact import views

urlpatterns = [
    url(r'^contacts/$', views.contact_list),
]
