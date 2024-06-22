from rest_framework import serializers
from .models import *

class CustomUserSerializers(serializers.Serializer):
   class Meta:
        model = CustomUser
        fields = '__all__'

class PartnerProjectSerializers(serializers.Serializer):
   class Meta:
        model = PartnerProject
        fields = '__all__'

class PartnerProjTaskSerializers(serializers.Serializer):
   class Meta:
        model = PartnerProjTask
        fields = '__all__'