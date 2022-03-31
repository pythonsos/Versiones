// Ayuda a mostar el error
function mostrar_error(elemId, hintMsg) {document.getElementById(elemId).innerHTML = hintMsg;}


// Recopila los valores de las variables 
function R_invalido() {
    var Usuario = document.solicitud.Usuario.value;
    var C_electronico = document.solicitud.C_electronico.value;
    var Clave = document.solicitud.Clave.value;
    var Locacion = document.solicitud.Locacion.value;
    var Servicio = [];
    var checkboxes = document.getElementsByName("Servicio[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {         
            Servicio.push(checkboxes[i].value);
        }
    }
    
	// Se definen variables para manejar la validación
    var Usuario_invalido = C_invalido = Clave_invalido = Locacion_invalido = true;
    
    // Valida el usuario
    if(Usuario == "") {
        mostrar_error("Usuario_invalido", "Este usuario no es válido");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(Usuario) === false) {
            mostrar_error("Usuario_invalido", "Este usuario no es válido");
        } else {
            mostrar_error("Usuario_invalido", "");
            Usuario_invalido = false;
        }
    }
    
    // Valida la dirección del correo electrónico
    if(C_electronico == "") {                    
        mostrar_error("C_invalido", "Este correo electrónico no es válido");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(C_electronico) === false) {
            mostrar_error("C_invalido", "Este usuario no es válido");
        } else{
            mostrar_error("C_invalido", "");
            C_invalido = false;
        }
    }
    
    // Valida la clave
    if(Clave == "") {
        mostrar_error("Clave_invalido", "Esta clave no es válida");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(Clave) === false) {
            mostrar_error("Clave_invalido", "Esta clave no es válida");
        } else{
            mostrar_error("Clave_invalido", "");
            Clave = false;
        }
    }
    
    // Validar la locacion
    if(Locacion == "Ninguna") {
        mostrar_error("Locacion_invalido", "Escoja una opción");
    } else {
        mostrar_error("Locacion_invalido", "");
        Locacion_invalido = false;
    }
    
  
};
