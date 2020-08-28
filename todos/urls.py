from rest_framework import routers

from .views import BucketViewSet, TodoViewSet

router = routers.DefaultRouter()
router.register('buckets', BucketViewSet, 'buckets')
router.register('todos', TodoViewSet, 'todos')

urlpatterns = router.urls