from django.db import models

# Create your models here.


class Contact(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=345, unique=True)
    message = models.TextField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)


# class Info(models.Model):

#     nickname = models.CharField(max_length=50)
#     name = models.CharField(max_length=50)
#     profession = models.CharField(max_length=50)
#     biography = models.TextField(max_length=500)
#     skills = models.
