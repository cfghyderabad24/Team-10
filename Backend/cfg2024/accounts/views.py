from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import *
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password
from rest_framework import generics
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['POST'])
def check_data(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = User.objects.get(email=email)
        if password==user.password:
            serializer = UserSerializer(user)
            print(serializer.data)
            return JsonResponse(serializer.data)
        else:
            return JsonResponse({}, status=123) 
    except User.DoesNotExist:
        return JsonResponse({}, status=400) 
    
class ProjectItemsListView(generics.ListAPIView):
    queryset = Project_Items.objects.all()
    serializer_class = ProjectItemsSerializer