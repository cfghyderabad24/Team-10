from django.contrib import admin
from .models import *
from django import forms

from accounts.models import Project_Items

# Register your models here.

# admin.site.register(User)
admin.site.register(Organisation)
admin.site.register(Action_Items)

admin.site.register(ProjectActionTasks_Jan)
admin.site.register(ProjectActionTasks_Jul)


class ProjectItemAdminForm(forms.ModelForm):
    class Meta:
        model = Project_Items
        fields = "__all__"

    # def __init__(self, *args, **kwargs):
    #     #breakpoint()
    #     print(f"{self.fields}")
    #     super().__init__(*args, **kwargs)
    #     if self.instance and self.instance.project_region:
    #         self.fields['assigned_to'].queryset = User.objects.filter(region=self.instance.project_region)
    #     else:
    #         self.fields['assigned_to'].queryset = User.objects.none()


@admin.register(User)
class UserAdminModel(admin.ModelAdmin):
    list_display = ["email", "region"]
    list_filter = ["region"]


class ProjectItemAdmin(admin.ModelAdmin):
    raw_id_fields = ["assigned_to"]
    form = ProjectItemAdminForm


admin.site.register(Project_Items, ProjectItemAdmin)

# class UserAdmin(admin.ModelAdmin):
#     pass

# class OrganisationAdmin(admin.ModelAdmin):
#     pass
