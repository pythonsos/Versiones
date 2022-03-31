from django.shortcuts import render,HttpResponse
# Create your views here.

def inicio(request):      #vista inicio

    return render(request,"Prowebfase3App/Inicio.html")

def servicios(request):      #vista servicios

    return render(request,"Prowebfase3App/Servicios.html")

def categorias(request):      #vista categorias

    return render(request,"Prowebfase3App/Categorias.html")

def videos(request):      #vista videos

    return render(request,"Prowebfase3App/Videos.html")

def series(request):      #vista series

    return render(request,"Prowebfase3App/Series.html")

def peliculas(request):      #vista peliculas

    return render(request,"Prowebfase3App/Peliculas.html")

def animes(request):      #vista anime

    return render(request,"Prowebfase3App/Animes.html")    

def fservicios(request):      #vista fservicios

    return render(request,"Prowebfase3App/Fservicios.html")

def formularioExitoso(request):      #vista formularioExitoso

    return render(request,"Prowebfase3App/FormularioExitoso.html")

def infoLinks(request):      #vista infoLinks

    return render(request,"Prowebfase3App/InfoLinks.html")

def fallosComunes(request):      #vista fallosComunes

    return render(request,"Prowebfase3App/FallosComunes.html")

def reportar(request):      #vista reportar

    return render(request,"Prowebfase3App/Reportar.html")














