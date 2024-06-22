from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser,PartnerProject,PartnerProjTask, PartnerLogin

class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('doc_data', 'due_date', 'cycle')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('doc_data', 'due_date', 'cycle')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(PartnerProject)
admin.site.register(PartnerProjTask)
admin.site.register(PartnerLogin)