from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class OrganisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organisation
        fields = '__all__'

class Action_ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action_Items
        fields = '__all__'

class ProjectActionTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectActionTasks_Jan
        fields = '__all__'

class ProjectActionTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectActionTasks_Jul
        fields = '__all__'

