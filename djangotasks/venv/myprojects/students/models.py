from django.db import models

# Create your models here.
class Students(models.Model):
    student_id=models.IntegerField()
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    course=models.CharField(max_length=20,null=True,blank=True)
