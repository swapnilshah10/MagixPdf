from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Pdfs(models.Model):
    Pdfs = models.FileField(null=True , upload_to="pdfs/") 
    user_id = models.ForeignKey(User ,null = True , blank = True, on_delete=models.CASCADE)