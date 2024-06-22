from django.db import models

class Organisation(models.Model):
    organisation_name = models.CharField(max_length=100)

    def __str__(self):
        return self.organisation_name
    
class User(models.Model):
    email = models.EmailField(primary_key=True)
    phone_number = models.CharField(max_length=15)
    password = models.CharField(max_length=128)
    role_choices = [
        ('cry_director', 'Cry Director'),
        ('cry_manager', 'Cry Manager'),
        ('cry_frontliner', 'Cry Frontliner'),
        ('partner_org', 'Partner Organization')
    ]
    region_choices=[
        ('north', 'North'),
        ('west', 'West'),
        ('south', 'South'),
        ('east', 'East'),

    ]
    role = models.CharField(max_length=20, choices=role_choices)

    region = models.CharField(max_length=20, choices=region_choices)

    

    organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE)

    def __str__(self):
        return self.email

class Action_Items(models.Model):
    action_data=models.CharField(max_length=550)
    due_date=models.DateField()
    cycle_choices=[
        ('jan', 'Jan'),
        ('july', 'July'),
    ]
    cycle=models.CharField(max_length=50,choices=cycle_choices)

    class Meta:
        constraints = [models.UniqueConstraint(fields=['action_data', 'cycle'], name='unique_user_email_phone')]
        
class Project_Items(models.Model):
    project_name=models.CharField(max_length=50)
    assigned_to=models.ForeignKey(User, on_delete=models.CASCADE)
    




    
