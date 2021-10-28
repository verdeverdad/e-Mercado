//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


    let nameRegistrado = document.getElementById("nomUsu")
    let nameRegistradoLogueado = JSON.parse(localStorage.getItem("nameRegistrado")) //traigo lo que quedo guardado en el set
    nameRegistrado.innerHTML = "Nombre de usuario: " + nameRegistradoLogueado.nameRegistrado

    let nombre = document.getElementById("nombre")
    let nombreLogueado = JSON.parse(localStorage.getItem("nombre")) //traigo lo que quedo guardado en el set
    nombre.innerHTML = "Nombre completo: " + nombreLogueado.nombre

    let edad = document.getElementById("edad")
    let edadLogueado = JSON.parse(localStorage.getItem("edad")) //traigo lo que quedo guardado en el set
    edad.innerHTML = "Edad: " + edadLogueado.edad

    let email = document.getElementById("email")
    let emailLogueado = JSON.parse(localStorage.getItem("email")) //traigo lo que quedo guardado en el set
    email.innerHTML = "Email: " + emailLogueado.email

    let direccion = document.getElementById("direccion")
    let direccionLogueado = JSON.parse(localStorage.getItem("direccion")) //traigo lo que quedo guardado en el set
    direccion.innerHTML = "Dirección: " + direccionLogueado.direccion


    let nContacto = document.getElementById("numContacto")
    let nContactoLogueado = JSON.parse(localStorage.getItem("nContacto")) //traigo lo que quedo guardado en el set
    nContacto.innerHTML = "Número de contacto: " + nContactoLogueado.nContacto
   
});

function modificar(){
    
    
    let nameRegistrado = document.getElementById("nomUsu")
    let nameRegistradoLogueado = JSON.parse(localStorage.getItem("nameRegistrado")) //traigo lo que quedo guardado en el set
    nameRegistrado.innerHTML = "Nombre de usuario: " + nameRegistradoLogueado.nameRegistrado

    let nombre = document.getElementById("nombre")
    let nombreLogueado = JSON.parse(localStorage.getItem("nombre")) //traigo lo que quedo guardado en el set
    nombre.innerHTML = "Nombre completo: " + nombreLogueado.nombre

    let edad = document.getElementById("edad")
    let edadLogueado = JSON.parse(localStorage.getItem("edad")) //traigo lo que quedo guardado en el set
    edad.innerHTML = "Edad: " + edadLogueado.edad

    let email = document.getElementById("email")
    let emailLogueado = JSON.parse(localStorage.getItem("email")) //traigo lo que quedo guardado en el set
    email.innerHTML = "Email: " + emailLogueado.email

    let direccion = document.getElementById("direccion")
    let direccionLogueado = JSON.parse(localStorage.getItem("direccion")) //traigo lo que quedo guardado en el set
    direccion.innerHTML = "Dirección: " + direccionLogueado.direccion


    let nContacto = document.getElementById("numContacto")
    let nContactoLogueado = JSON.parse(localStorage.getItem("nContacto")) //traigo lo que quedo guardado en el set
    nContacto.innerHTML =  nContactoLogueado.nContacto
    window.location.href = "Perfil.html"
}