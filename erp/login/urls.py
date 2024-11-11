from django.urls import path

from login.views import LoginViewSet

urlpatterns = [

    path("home", LoginViewSet.as_view({'get': "dashboard"}), name="allow-all"),
    path("login", LoginViewSet.as_view({'get': "login"}), name="allow-all"),
    path("signup", LoginViewSet.as_view({'post': "signup"}), name="allow-all")
]