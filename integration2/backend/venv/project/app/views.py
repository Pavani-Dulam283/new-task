from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.status import (HTTP_200_OK,HTTP_201_CREATED)
from .models import Person
import logging
log=logging.getLogger(__name__)
from .serializer import PersonSerializer

class PersonAPIView(APIView):
    try:
        def post(self,request):
            my_dict=request.data
            serializer=PersonSerializer(data=my_dict)
            if serializer.is_valid():
               serializer.save()
            return Response(serializer.data,HTTP_201_CREATED)

    except Exception as e:
        log.exception(e)

    try:
        def get(self,request):
            person_info=Person.objects.all()
            serializer=PersonSerializer(person_info,many=True)
            return Response(serializer.data,HTTP_200_OK)
    except Exception as e:
           log.exception(e)
    try:
        def put(self,request,id):
            obj=Person.objects.get(id=id)
            serializer=PersonSerializer(obj,data=request.data)
            if serializer.is_valid():
              serializer.save()
            return Response(serializer.data)
    except Exception as e:
            log.exception(e)
    try:
        def delete(self,request,id):
            obj=Person.objects.get(id=id).delete()
            return Response("field deleted")
    except Exception as e:
           log.exception(e)

class Person2APIView(APIView):
    try:
          def get(self,request,id):
            person_info=Person.objects.get(id=id)
            serializer=PersonSerializer(person_info)
            return Response(serializer.data,HTTP_200_OK)
    except Exception as e:
           log.exception(e)
class SearchAPIView(APIView):
          def get(self,request):
               obj = Person.objects.all()
               course = request.GET.get('Course')
               if course is not None:
                    data = obj.filter(Course__icontains = course)
                    return Response(data.values(), HTTP_200_OK)
            
   
     
    
    

      

    


    








# Create your views here.
