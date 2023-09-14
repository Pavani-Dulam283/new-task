from django.urls import path
from .views import *
urlpatterns=[
    path('person/',PersonAPIView.as_view()),
    path('person/<int:id>/',PersonAPIView.as_view()),
    path('per/<int:id>/',Person2APIView.as_view()),
    path('search/',SearchAPIView.as_view())
]