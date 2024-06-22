from django import forms
from .models import Project_Items, User

class ProjectItemForm(forms.ModelForm):
    class Meta:
        model = Project_Items
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if 'project_region' in self.data:
            try:
                project_region = self.data.get('project_region')
                
                self.fields['assigned_to'].queryset = User.objects.filter(region=project_region)
            except (ValueError, TypeError):
                self.fields['assigned_to'].queryset = User.objects.none()
        elif self.instance.pk:
            self.fields['assigned_to'].queryset = User.objects.filter(region=self.instance.project_region)
        else:
            self.fields['assigned_to'].queryset = User.objects.none()
