from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
import requests


class Organisation(models.Model):
    organisation_name = models.CharField(max_length=100)

    def __str__(self):
        return self.organisation_name


class User(models.Model):
    email = models.EmailField(primary_key=True)
    phone_number = models.CharField(max_length=15)
    password = models.CharField(max_length=128)
    role_choices = [
        ("cry_director", "Cry Director"),
        ("cry_manager", "Cry Manager"),
        ("cry_frontliner", "Cry Frontliner"),
        ("partner_org", "Partner Organization"),
    ]

    region_choices = [
        ("north", "North"),
        ("west", "West"),
        ("south", "South"),
        ("east", "East"),
    ]
    role = models.CharField(max_length=20, choices=role_choices)

    region = models.CharField(max_length=20, choices=region_choices)

    organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE)

    def __str__(self):
        return self.email


class Action_Items(models.Model):
    action_data = models.CharField(max_length=550)
    due_date = models.DateField()
    cycle_choices = [
        ("jan", "Jan"),
        ("july", "July"),
    ]
    cycle = models.CharField(max_length=50, choices=cycle_choices)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["action_data", "cycle"], name="unique_user_email_phone"
            )
        ]


class Project_Items(models.Model):
    project_name = models.CharField(max_length=50)
    region_choices = [
        ("north", "North"),
        ("west", "West"),
        ("south", "South"),
        ("east", "East"),
    ]
    project_region = models.CharField(
        max_length=20, choices=region_choices, null=True, blank=True
    )
    assigned_to = models.ForeignKey(to=User, on_delete=models.CASCADE)
    cycle_choices = [("jan", "Jan"), ("july", "July"), ("none", "None")]
    cycle = models.CharField(
        max_length=50, choices=cycle_choices, null=True, blank=True
    )
    donation_amt = models.IntegerField(null=True, blank=True)
    organisation = models.ForeignKey(
        Organisation, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return self.project_name


class ProjectActionTasks_Jan(models.Model):
    project_name = models.ForeignKey(Project_Items, on_delete=models.CASCADE)
    action_name = models.CharField(max_length=300)
    action_duedate = models.DateField()
    choices_status = [
        ("yes", "Yes"),
        ("no", "No"),
    ]
    action_status = models.CharField(
        max_length=50, choices=choices_status, null=True, blank=True
    )
    url = models.URLField(max_length=200,null=True)


class ProjectActionTasks_Jul(models.Model):
    project_name = models.ForeignKey(
        Project_Items, on_delete=models.CASCADE, null=True, blank=True
    )
    action_name = models.CharField(max_length=300)
    action_duedate = models.DateField()
    choices_status = [
        ("yes", "Yes"),
        ("no", "No"),
    ]
    url = models.URLField(max_length=200,null=True)


@receiver(post_save, sender=ProjectActionTasks_Jan)
@receiver(post_save, sender=ProjectActionTasks_Jul)
def send_post_request(sender, instance, created, **kwargs):
    if created and instance.action_status == "yes":
        project_name = instance.project_name
        action_name = instance.action_name
        cycle = project_name.cycle

        try:
            manager_user = User.objects.get(role="cry_manager")
            manager_email = manager_user.email
        except User.DoesNotExist:
            manager_email = None

        if project_name.organisation:
            organisation_name = project_name.organisation.organisation_name
        else:
            organisation_name = "No Organisation"

        assigned_to = (
            project_name.assigned_to.username
            if project_name.assigned_to
            else "No Assigned User"
        )

        endpoint_url = "https://httpbin.org/post"

        payload = {
            "cycle": cycle,
            "action_name": action_name,
            "project_name": project_name.project_name,
            "manager_email": manager_email,
            "organisation_name": organisation_name,
            "assigned_to": assigned_to,
        }

        try:
            response = requests.post(endpoint_url, data=payload)
            response.raise_for_status()
            print(response)
            print(f"HTTP POST request sent successfully to {endpoint_url}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to send HTTP POST request: {e}")


@receiver(post_save, sender=Project_Items)
def print_project_details_and_send_post(sender, instance, created, **kwargs):
    if created:
        project_name = instance.project_name

        action_items = []
        actions = Action_Items.objects.filter(cycle=instance.cycle)
        if actions.exists():
            for action in actions:
                action_items.append(
                    {
                        "Action Data": action.action_data,
                        "Due Date": action.due_date.strftime("%Y-%m-%d"),
                    }
                )

        assigned_to_email = (
            instance.assigned_to.email
            if instance.assigned_to
            else "No Assigned User Email"
        )

        organisation_name = (
            instance.organisation.organisation_name
            if instance.organisation
            else "No Organisation"
        )

        try:
            cry_manager_user = User.objects.get(role="cry_manager")
            cry_manager_email = cry_manager_user.email
        except User.DoesNotExist:
            cry_manager_email = "No Cry Manager found"

        cycle = instance.cycle

        data = {
            "Project Name": project_name,
            "Action Items": action_items,
            "Assigned To": assigned_to_email,
            "Organisation": organisation_name,
            "Cry Manager Email": cry_manager_email,
            "Cycle": cycle,
        }

        print("Sending POST request with data:")
        print(data)

        url = "https://httpbin.org/post"

        try:
            response = requests.post(url, json=data)
            response.raise_for_status()
            print(response)
            print("POST request successful")
        except requests.exceptions.RequestException as e:
            print(f"Error sending POST request: {e}")


@receiver(post_save, sender=Project_Items)
def print_project_details_and_send_post(sender, instance, created, **kwargs):
    if created:
        project_name = instance.project_name
        donation_amt = instance.donation_amt
        manager_email = None
        director_email = None

        if instance.organisation:
            organisation_name = instance.organisation.organisation_name
        else:
            organisation_name = "No Organisation"

        if donation_amt > 500000:
            try:
                manager_user = User.objects.get(role="cry_manager")
                manager_email = manager_user.email
            except User.DoesNotExist:
                manager_email = None

        if donation_amt > 10000000:
            try:
                director_user = User.objects.get(role="cry_director")
                director_email = director_user.email
            except User.DoesNotExist:
                director_email = None

        print(f"Project Name: {project_name}")
        print(f"Donation Amount: {donation_amt}")
        print(f"Organisation Name: {organisation_name}")

        payload = {
            "project_name": project_name,
            "donation_amt": donation_amt,
            "manager_email": manager_email,
            "director_email": director_email,
            "organisation_name": organisation_name,
        }

        endpoint_url = "https://httpbin.org/post"

        try:
            response = requests.post(endpoint_url, data=payload)
            response.raise_for_status()
            print(response)
            print(f"HTTP POST request sent successfully to {endpoint_url}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to send HTTP POST request: {e}")
