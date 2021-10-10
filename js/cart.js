var comprado = []

function mostrarCarrito(array) {
    let contenido = "";
    //console.log(typeof nueva)
    
      for (let i = 0; i < array.length; i++){  
        let carrito = array[i];
        contenido += "<div class='container row-8'>"
        contenido += "<img src='"+ carrito.src + "' style='width: 20%; min-height: 100px;' class='col align-self-end img-fluid float-right'>" +  "<br>";
        contenido += "</div>"

        contenido += "<div id='elemento"+i+"'>"
        contenido += "<strong>Nombre: </strong>" + carrito.name + "<br>";
        contenido += "<strong>Cantidad: </strong>" + carrito.count + "<br>";
        contenido += "<strong>Precio: </strong>" + carrito.unitCost + "<br>";
        contenido += "<strong>Moneda: </strong>" + carrito.currency + "<br>";
        contenido += "<button class='btn btn-outline'>Eliminar</button>"
        contenido += "<button class='btn btn-outline'>Más productos del vendedor</button>"
        contenido += "<button class='btn btn-outline'>Comprar ahora</button>"
        contenido += "<button class='btn btn-outline'>Guardar para después</button>"
        contenido += "</div>"
        contenido += "<hr>"


    }
    document.getElementById("carrito").innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRITO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comprado = resultObj.data.articles;
            console.log(resultObj.data)
            
            mostrarCarrito(comprado);
        }

    });
});
