from django.db import models
from django.contrib.auth.models import User

class BaseModel(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="%(class)s_created_by")
    last_modified_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="%(class)s_last_modified_by")
    created_at = models.DateTimeField(null=True, blank=True)
    last_modified_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True

    @staticmethod
    def get_admin_user():
        return User.objects.get(username="todoappadmin")

class Bucket(BaseModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Todo(BaseModel):
    STATUS_CHOICES = (
        ("CREATED", "CREATED"),
        ("INPROGRESS", "INPROGRESS"),
        ("COMPLETED", "COMPLETED"),
        ("ABANDONED", "ABANDONED")
    )
    bucket = models.ForeignKey(Bucket, related_name="bucket", on_delete=models.PROTECT)
    task = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='CREATED')

    def __str__(self):
        return self.task