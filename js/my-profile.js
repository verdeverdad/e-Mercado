

let nameRegis = document.getElementById("nomUsu");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let email = document.getElementById("email");
let direccion = document.getElementById("direccion");
let nContacto = document.getElementById("numContacto");



document.addEventListener("DOMContentLoaded", function(){

    
   
    
    let nombreUsuario = JSON.parse(localStorage.getItem("nombreUsuario")) //traigo lo que quedo guardado en el set
    console.log("nombreLogueado...::"+nombreUsuario.username)
    nameRegis.innerHTML = "Nombre de usuario: " + nombreUsuario.username
    
    
    let nombreLogueado = JSON.parse(localStorage.getItem("nombre")) //traigo lo que quedo guardado en el set
    nombre.innerHTML =  nombreLogueado.nombre

    let edadLogueado = JSON.parse(localStorage.getItem("edad")) //traigo lo que quedo guardado en el set
    edad.innerHTML = "Edad: " + edadLogueado.edad

    let emailLogueado = JSON.parse(localStorage.getItem("email")) //traigo lo que quedo guardado en el set
    email.innerHTML = "Email: " + emailLogueado.email

    let direccionLogueado = JSON.parse(localStorage.getItem("direccion")) //traigo lo que quedo guardado en el set
    direccion.innerHTML = "Dirección: " + direccionLogueado.direccion


    let nContactoLogueado = JSON.parse(localStorage.getItem("nContacto")) //traigo lo que quedo guardado en el set
    nContacto.innerHTML = "Número de contacto: " + nContactoLogueado.nContacto
   
});

function modificar(){
    
    nomUsu.contentEditable = "true"
    nombre.contentEditable = "true";
    edad.contentEditable = "true"
    email.contentEditable = "true"
    direccion.contentEditable = "true"
    nContacto.contentEditable = "true"

    let bMod = document.getElementById("modificarP");
    bMod.style.display = "none"

    let bguardar = document.getElementById("bguardar");
    bguardar.style.display = "inline-block";
    
}

function guardarModificados(){
    console.log(nomUsu.innerHTML)
    nomUsu.contentEditable = "false"
    nombre.contentEditable = "false"
    edad.contentEditable = "false"
    email.contentEditable = "false"
    direccion.contentEditable = "false"
    nContacto.contentEditable = "false"
    console.log(nombre.innerHTML)
    localStorage.setItem("nombre", JSON.stringify({ "nombre": nombre.innerHTML }));
    localStorage.setItem("email", JSON.stringify({ "email": email.innerHTML }));
    localStorage.setItem("direccion", JSON.stringify({ "direccion": direccion.innerHTML }));
    
    let bguardar = document.getElementById("bguardar");
    bguardar.style.display = "none";
    let bMod = document.getElementById("modificarP");
    bMod.style.display = "inline-block"

   
}