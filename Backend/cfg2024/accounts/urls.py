from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('users', UserViewSet)


urlpatterns = [
    path('login/', include(router.urls)),
    path('login/check-data/', check_data, name='check_data'),
    path('project-items/', ProjectItemsListView.as_view(), name='project_items_list'),
    path('region-status-count/', RegionStatusCountView.as_view(), name='region_status_count'),
]