"""webpractice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path


from Prowebfase3App import views

urlpatterns = [

    path('',views.inicio,name="Inicio"),
    path('servicios',views.servicios,name="Servicios"),
    path('categorias',views.categorias,name="Categorias"),
    path('videos',views.videos,name="Videos"),
    path('series',views.series,name="Series"),
    path('peliculas',views.peliculas,name="Peliculas"),
    path('animes',views.animes,name="Animes"),
    path('fservicios',views.fservicios,name="Fservicios"),
    path('formularioExitoso',views.formularioExitoso,name="FormularioExitoso"),
    path('infoLinks',views.infoLinks,name="InfoLinks"),
    path('fallosComunes',views.fallosComunes,name="FallosComunes"),
    path('reportar',views.reportar,name="Reportar")

   





 
]
