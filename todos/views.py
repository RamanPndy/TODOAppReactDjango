from rest_framework import viewsets

from .serializers import TodoSerializer, BucketSerializer
from todos.models import Todo, Bucket

class BucketViewSet(viewsets.ModelViewSet):
    queryset = Bucket.objects.all()
    serializer_class = BucketSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer