 // Ayuda a mostar el error
 function mostrar_error(elemId, hintMsg) {document.getElementById(elemId).innerHTML = hintMsg;}
    
    
 // Recopila los valores de las variables 
 function R_invalido() {
     var fecha_hora = document.reporte_problema.Usuario.value;
     var info = document.reporte_problema.fecha_hora.value;
   
     var motivo = [];
     var checkboxes = document.getElementsByName("motivo[]");
     for(var i=0; i < checkboxes.length; i++) {
         if(checkboxes[i].checked) {         
             motivo.push(checkboxes[i].value);
         }
     }

     var tipo = [];
     var checkboxes = document.getElementsByName("tipo[]");
     for(var i=0; i < checkboxes.length; i++) {
         if(checkboxes[i].checked) {         
             tipo.push(checkboxes[i].value);
         }
     }
     
     // Se definen variables para manejar la validación
     var tipo_invalido = motivo_invalido = info_invalido = fecha_hora_invalido = true;
     

     
     // Valida la fecha y hora
     if(fecha_hora == "") {                    
         mostrar_error("fecha_hora_invalido", "Coloque una fecha valida");
     } else {
         var regex = /^[a-zA-Z\s]+$/;
         if(regex.test(fecha_hora) === false) {
             mostrar_error("fecha_hora_invalido", "Coloque una fecha valida");
         } else{
             mostrar_error("fecha_hora_invalido", "");
             fecha_hora_invalido = false;
         }
     }
     
     // Valida la información
     if(info == "") {
         mostrar_error("info_invalido", "Esta información no es válida");
     } else {
         var regex = /^[a-zA-Z\s]+$/;
         if(regex.test(info) === false) {
             mostrar_error("info_invalido", "Esta información no es válida");
         } else{
             mostrar_error("info_invalido", "");
             info_invalido = false;
         }
     }
     
     // Valida la lista de selección
     if(motivo == "Ninguno") {
         mostrar_error("motivo_invalido", "Escoja una opción");
     } else {
         mostrar_error("motivo_invalido", "");
         motivo_invalido = false;
     }


     // Valida la lista de selección
     if(tipo == "Ninguno") {
         mostrar_error("tipo_invalido", "Escoja una opción");
     } else {
         mostrar_error("tipo_invalido", "");
         tipo_invalido = false;
     }
     
   
 };