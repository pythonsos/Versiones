from django.shortcuts import render,HttpResponse
# Create your views here.

def inicio(request):      #vista inicio

    return render(request,"Prowebfase2App/Inicio.html")

def servicios(request):      #vista servicios

    return render(request,"Prowebfase2App/Servicios.html")

def categorias(request):      #vista categorias

    return render(request,"Prowebfase2App/Categorias.html")

def videos(request):      #vista videos

    return render(request,"Prowebfase2App/Videos.html")

def series(request):      #vista series

    return render(request,"Prowebfase2App/Series.html")

def peliculas(request):      #vista peliculas

    return render(request,"Prowebfase2App/Peliculas.html")

def animes(request):      #vista animes

    return render(request,"Prowebfase2App/Animes.html")    

def fservicios(request):      #vista fservicios

    return render(request,"Prowebfase2App/Fservicios.html")

def formularioExitoso(request):      #vista formularioExitoso

    return render(request,"Prowebfase2App/FormularioExitoso.html")

def infoLinks(request):      #vista infoLinks

    return render(request,"Prowebfase2App/InfoLinks.html")

def fallosComunes(request):      #vista fallosComunes

    return render(request,"Prowebfase2App/FallosComunes.html")

def reportar(request):      #vista reportar

    return render(request,"Prowebfase2App/Reportar.html")














