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

class ProjectItemsSerializer(serializers.ModelSerializer):
    organisation_name = serializers.SerializerMethodField()

    class Meta:
        model = Project_Items
        fields = ['project_name', 'organisation_name', 'donation_amt']

    def get_organisation_name(self, obj):
        return obj.organisation.organisation_name if obj.organisation else None

