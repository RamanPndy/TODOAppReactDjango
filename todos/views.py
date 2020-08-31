from datetime import datetime
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from TodoApp.settings import logger
from .serializers import TodoSerializer, BucketSerializer
from todos.models import Todo, Bucket, BaseModel

class BucketViewSet(viewsets.ModelViewSet):
    queryset = Bucket.objects.all()
    serializer_class = BucketSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class GetTodosByBucketAPIView(APIView):
    def get(self, request):
        bucket_id = request.query_params['bucketid']
        todos_list = []
        try:
            todos = Todo.objects.filter(bucket__id=bucket_id)
            for todo in todos:
                data = {}
                data['bucket'] = todo.bucket.name
                data['bucketid'] = todo.bucket.id
                data['id'] = todo.id
                data['task'] = todo.task
                data['status'] = todo.status
                data['created_at'] = todo.created_at
                data['last_modified_at'] = todo.last_modified_at
                todos_list.append(data)
            return Response(status=status.HTTP_200_OK, data=todos_list)
        except Exception as e:
            logger.error(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=todos_list)

class BucketAPIView(APIView):
    def post(self, request):
        request_data = request.data
        bucket_name = request_data.get('bucket')
        try:
            user = BaseModel.get_admin_user()
            bucket = Bucket.objects.create(name=bucket_name, created_by=user, last_modified_by=user,
                                  created_at=datetime.now(), last_modified_at=datetime.now())
            return Response(status=status.HTTP_200_OK, data={'id': bucket.id, 'name': bucket.name, 'created_at': bucket.created_at})
        except Exception as e:
            logger.error(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request):
        bucket_id = request.query_params['bucketid']
        try:
            bucket = Bucket.objects.get(id=bucket_id)
            todos = Todo.objects.filter(bucket=bucket)
            if todos.exists():
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE, data="Bucket {} has todos {} associated with it.".
                                format(bucket.name, ','.join([todo.task for todo in todos])))
            else:
                bucket.delete()
                return Response(status=status.HTTP_200_OK, data="Bucket {} deleted.".format(bucket.name))
        except Exception as e:
            logger.error(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ToDoAPIView(APIView):
    def post(self, request):
        request_data = request.data
        bucket_id = request_data.get('bucketid')
        task = request_data.get('task')
        taskstatus = request_data.get('status')
        try:
            user = BaseModel.get_admin_user()
            bucket = Bucket.objects.get(id=bucket_id)
            todo = Todo.objects.create(bucket=bucket, task=task, status=taskstatus if taskstatus else 'CREATED',
                                created_by=user, last_modified_by=user, created_at=datetime.now(), last_modified_at=datetime.now())
            return Response(status=status.HTTP_200_OK, data={'id': todo.id, 'bucketid': bucket_id, 'task': todo.task, 'status': todo.status,
                                                             'bucket': bucket.name, 'created_at': todo.created_at, 'last_modified_at': todo.last_modified_at})
        except Exception as e:
            logger.error(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        request_data = request.data
        todo_id = request_data.get('id')
        task = request_data.get('task')
        taskstatus = request_data.get('status')
        try:
            todo = Todo.objects.get(id=todo_id)
            todo.task = task
            todo.status = taskstatus
            todo.last_modified_at = datetime.now()
            todo.save()
            return Response(status=status.HTTP_200_OK, data={'id': todo.id, 'bucketid': todo.bucket.id, 'task': todo.task, 'status': todo.status,
                                                             'bucket': todo.bucket.name, 'created_at': todo.created_at, 'last_modified_at': todo.last_modified_at})
        except Exception as e:
            logger.error(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)