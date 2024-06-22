from django.db import models
from django.contrib.auth.models import AbstractUser
from accounts.models import *

class CustomUser(AbstractUser):
    DOC_CYCLE_CHOICES = [
        ('Jan', 'January'),
        ('Jul', 'July'),
    ]

    doc_data = models.TextField()
    due_date = models.DateField()
    cycle = models.CharField(max_length=3, choices=DOC_CYCLE_CHOICES)

    def __str__(self):
        return self.username

class PartnerProject(models.Model):
    CYCLE_CHOICES = [
        ('Jan', 'January'),
        ('Jul', 'July'),
    ]

    # proj_name = models.ForeignKey(ProjItem, on_delete=models.CASCADE)
    # assigned_to = models.ForeignKey(
    #     settings.AUTH_USER_MODEL, 
    #     limit_choices_to={'role__name': 'partner_org'}, 
    #     on_delete=models.CASCADE
    # )
    cycle = models.CharField(max_length=3, choices=CYCLE_CHOICES)
    donation_amt = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.proj_name} assigned to {self.assigned_to}"
    
class PartnerProjTask(models.Model):
    DOC_ITEMS_CHOICES = [
        ('IncomeTax Returns', 'IncomeTax Returns'),
        ('FC', 'FC'),
        ('Consolidated Audit Reports', 'Consolidated Audit Reports'),
    ]

    partner_project = models.ForeignKey(PartnerProject, on_delete=models.CASCADE)
    doc_items = models.CharField(max_length=50, choices=DOC_ITEMS_CHOICES)
    utilizationcertificate_cyclename = models.CharField(max_length=50, blank=True)
    url = models.URLField(max_length=200)

    def save(self, *args, **kwargs):
        if self.partner_project.cycle == 'Jan':
            self.utilizationcertificate_cyclename = 'utilizationcertificate_jan'
        elif self.partner_project.cycle == 'Jul':
            self.utilizationcertificate_cyclename = 'utilizationcertificate_july'
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Task for {self.partner_project} - {self.doc_items}"