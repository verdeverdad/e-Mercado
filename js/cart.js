var comprado = []

function mostrarCarrito(array) {
    let contenido = "";
    //console.log(typeof nueva)


    for (let i = 0; i < array.length; i++) {
        let carrito = array[i];

        if (carrito.currency === "USD") {
            carrito.unitCost = carrito.unitCost * 40
            carrito.currency = "UYU"
        }

        contenido += "<div id='elemento" + i + "' class='border  border-white'>"

        contenido += "<img src='" + carrito.src + "' style='width: 20%;' class=' img-fluid float-right'>" + "<br>";

        contenido += "<strong>Nombre: </strong>" + carrito.name + "<br>";
        contenido += "<strong>Cantidad: </strong>" + "<input type='number' id='cantidad" + i + "' onchange='calculoSubTotal(" + i + ")' value='" + carrito.count + "'>" + "<br>";
        contenido += "<strong>Precio: </strong> " + "<input id='precio" + i + "' type='number' value='" + carrito.unitCost + "'>" + "<br>";
        contenido += "<strong>Moneda: </strong>" + carrito.currency + "<br>";
        contenido += "<strong>Subtotal: $ <span  class='subtotal' id='subtotal" + i + "'>" + carrito.unitCost * carrito.count + " </span></strong>" + "<br>"
        //botones
        contenido += "<button class='btn btn-outline'>Eliminar</button>"
        contenido += "<button class='btn btn-outline'>Agregar más productos</button>"
        contenido += "<button class='btn btn-outline'>Comprar ahora</button>"
        contenido += "<button class='btn btn-outline'>Guardar para después</button>"
        contenido += "</div>"
        contenido += "<br>"



    }
    document.getElementById("carrito").innerHTML = "<div class='row'><div class='col-sm-9'>" + contenido + "</div>" + `
    
            <div class="col-sm-3 float-right border border-info  h-25  ">
                <p><strong>Subtotal: $ </strong><span  id="totalSub" class="price" style="color:black"></span></p><br>
                <p><strong>Envío: $ </strong><span id="envio" class="price">0</span></p><br>
                 <p><strong>Total: $ </strong><span id="total" class="price" style="color:black"></span></p><br>
                <button id="paso2" class="btn btn" style="background-color: rgb(195, 248, 188);" ><strong>Confirmar
                compra</strong> </button>
            
    </div> ` + "</div>"
    totalSub();
    calculoTotal();

}


function calculoSubTotal(i) {

    let cantidad = parseInt(document.getElementById("cantidad" + i).value);
    let precio = parseInt(document.getElementById("precio" + i).value);

    subTotal = cantidad * precio;

    document.getElementById("subtotal" + i).innerHTML = subTotal

    totalSub();
    envio();
    calculoTotal();
}

function totalSub() {
    total = 0
    let sub = document.getElementsByClassName("subtotal");
    for (let i = 0; i < sub.length; i++) {
        total += parseInt(sub[i].innerHTML);

    }
    document.getElementById("totalSub").innerHTML = total
}

function envio() {
    let total1 = parseInt(document.getElementById("totalSub").innerHTML);
    total = 0

    let premium = document.getElementById("premium").checked;
    //console.log(premium)
    let express = document.getElementById("express").checked;
    let standard = document.getElementById("standard").checked;
    if (premium == true) {
        total = total1 * 15 / 100;
    }
    if (express == true) {
        total = total1 * 7 / 100;
    }
    if (standard == true) {
        total = total1 * 5 / 100;
    }

    document.getElementById("envio").innerHTML = total
}


function calculoTotal() {
    total = 0
    let st = parseInt(document.getElementById("totalSub").innerHTML);
    let envio = parseInt(document.getElementById("envio").innerHTML);

    total = st + envio;
    document.getElementById("total").innerHTML = total

}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRITO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comprado = resultObj.data.articles;

            mostrarCarrito(comprado);

        }
    });
});

let form = document.getElementById("datosEnvio");
let pago = document.getElementById("pago");
var camposCompletos = document.getElementsByClassName("form-control");
form.addEventListener("submit", function(event){
    for (let i = 0; i < camposCompletos.length; i++) {
   if(camposCompletos[i].value != undefined){
    pago.style.display = "inline-block";
   } 
} 
});

/*
function validarEnvio() {
   e.preventDefault();
    let metodo = document.getElementById("metodo").checked;
    let fname = document.getElementById("fname");
    let emailenvio = document.getElementById("emailenvio");
    let adr = document.getElementById("adr");
    let numpuerta = document.getElementById("numpuerta");
    let city = document.getElementById("city");
    let numcontacto = document.getElementById("numcontacto");
    let pago = document.getElementById("pago");
    let retiro = document.getElementById("retiro").checked;

    if (metodo == true && fname != undefined && emailenvio != undefined && adr != undefined && numpuerta != undefined && city != undefined && numcontacto != undefined) {

        localStorage.setItem("adr", JSON.stringify({ adr: adr }));
        localStorage.setItem("numpuerta", JSON.stringify({ numpuerta: numpuerta }));
        localStorage.setItem("city", JSON.stringify({ city: city }));
        localStorage.setItem("numcontacto", JSON.stringify({ numcontacto: numcontacto }));

        pago.style.display = "inline-block";
    }
    if (retiro == true) {
        pago.style.display = "inline-block";
    }
}
*/
