from django.contrib import admin
from .models import * 
# Register your models here.

admin.site.register(User)
admin.site.register(Organisation)



# class UserAdmin(admin.ModelAdmin):
#     pass

# class OrganisationAdmin(admin.ModelAdmin):
#     pass