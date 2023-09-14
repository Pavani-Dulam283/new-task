from django.db import models

# Create your models here.
class Person(models.Model):
    serialNo=models.IntegerField(max_length=5)
    FirstName=models.CharField(max_length=30)
    LastName=models.CharField(max_length=30)
    Email=models.CharField(max_length=30)
    Course=models.CharField(max_length=30)
