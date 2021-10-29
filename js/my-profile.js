//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let nameRegistrado = document.getElementById("nomUsu")
let nombre = document.getElementById("nombre")
let edad = document.getElementById("edad")
let email = document.getElementById("email")
let direccion = document.getElementById("direccion")
let nContacto = document.getElementById("numContacto")



document.addEventListener("DOMContentLoaded", function (e) {


    
    let nameRegistradoLogueado = JSON.parse(localStorage.getItem("nameRegistrado")) //traigo lo que quedo guardado en el set
    nameRegistrado.innerHTML = nameRegistradoLogueado.nameRegistrado

    
    let nombreLogueado = JSON.parse(localStorage.getItem("nombre")) //traigo lo que quedo guardado en el set
    nombre.innerHTML = "Nombre completo: " + nombreLogueado.nombre

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

    localStorage.setItem("nameRegistrado", JSON.stringify({ nameRegistrado: nomUsu.innerHTML }));
}