from django.conf.urls import url

from contact import views

urlpatterns = [
    url(r'^contacts/$', views.ContactList.as_view()),
    url(r'^contact/(?P<pk>[0-9]+)$', views.ContactDetail.as_view()),
]
