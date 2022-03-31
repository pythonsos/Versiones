from django.db import models

# Create your models here.

class usuarios_fservicios(models.Model):

    Usuario=models.CharField(max_length=26)
    Clave_especial_de_usuario=models.IntegerField(max_length=11)
    Correo_Electronico=models.EmailField()
    Locacion=models.BooleanField(True)
    Servicio=models.BooleanField(True)


class login(models.Model):

    Correo_Electronico=models.EmailField()
    Contraseña=models.CharField(max_length=20)


class DB_multimedia(models.Model):
    
    Series=models.FileField()
    Peliculas=models.FileField()
    Animes=models.FileField()



