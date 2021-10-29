//CONTENIDO E IMAGENES DEL PRODUCTO 
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let producto = resultObj.data;

            let titulo = document.getElementById("titulo");
            let descripcion = document.getElementById("descripcion");
            let precio = document.getElementById("precio");
            let moneda = document.getElementById("moneda");
            let categoria = document.getElementById("categoria");
            let relevancia = document.getElementById("relevancia");
            //let prodRelacionados = document.getElementById("prodRelacionados");
            let imagenes = document.getElementById("imagenes");


            function mostrarImagenes(array) {
                let contenido = ""
                for (let i = 0; i < producto.images.length; i++) {
                    if (i == 0) {
                        contenido += "<div class='carousel-item active'><img src='" + producto.images[i] + "' ></div>";
                    }
                    else {
                        contenido += "<div class='carousel-item '><img src='" + producto.images[i] + "' ></div>";
                    }
                }
                imagenes.innerHTML = contenido;
            }




            titulo.innerHTML = producto.name
            descripcion.innerHTML = "Descripción: " + producto.description
            precio.innerHTML = "Precio: " + producto.cost
            moneda.innerHTML = "Moneda: " + producto.currency
            categoria.innerHTML = "Categoría: " + producto.category
            relevancia.innerHTML = "Relevancia: " + producto.soldCount
            // prodRelacionados.innerHTML = "Productos relacionados: " + producto.relatedProducts

            mostrarImagenes(imagenes);
            // mostrarProdRela();
        }

    });
});


//COMENTARIOS DEL PRODUCTO (saca la info del json y la mustra en una lista; agrega nuevos comentarios)
const PRODUCTOS_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";

var getJSONData = function (url) { // esperamos la respuesta COMENTARIOS
    var result = {};
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = "ok";
            result.data = response;
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = 'error';
            return result;

        });
}




var comentariosArray = []

function mostrarComentarios(array) {
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let comentario = array[i]
        let puntos = ""
            //ESTRELLITAS MARCADAS
        if (comentario.score > 0 && comentario.score <= 5) {
            for (let i = 1; i <= comentario.score; i++) {
                puntos += '<span class="fa fa-star checked"></span>';

            }
            //COMPLETA ESTRELLITAS LIBRES
            for (let i = comentario.score + 1; i <= 5; i++) {
                puntos += '<span class="fa fa-star"></span>';
            }
        }
        //contenido += "<strong>Puntuación: </strong>" + comentario.score + "<br>";
        contenido += '<div style="text-aling: right">' + puntos + '</div>';
        contenido += "<strong>Comentario: </strong>" + comentario.description + "<br>";
        contenido += "<strong>Usuario: </strong>" + comentario.user + "<br>";
        contenido += "<strong>Fecha: </strong>" + comentario.dateTime + "<br>";
        contenido += "<br><br><hr>"

    }



    document.getElementById("comentarios").innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTOS_INFO_COMMENTS_URL).then(function (response) {
        if (response.status === "ok") {
            comentariosArray = response.data;

            mostrarComentarios(comentariosArray);
        }

    });
});


//NUEVO COMENTARIO
document.getElementById("enviar").addEventListener("click", function () {
    
    var d = new Date();
    let ncomentario = {

        score: getRating(),
        description: document.getElementById("nuevo-comentario").value,
        user: JSON.parse(localStorage.getItem("nombreUsuario")).username,
        dateTime: d.toLocaleDateString() + " " + d.toLocaleTimeString()
    }

    comentariosArray.push(ncomentario);
    mostrarComentarios(comentariosArray);
    document.getElementById("nuevo-comentario").value = "";

});


//PRODUCTOS RELACIONADOS (muestra la lista y saca la info del json)

var arrayProd = [];
var arrayRelacionados = []

function mostrarLista(array, array1) {
    //console.log(array, array1)
    let contenido = "";
    for (let i = 0; i < array1.length; i++) {

        document.getElementById("productosRelacionados").innerHTML += array[array1[i]]

        let productRelacionado = array[array1[i]]
        contenido += "<div class='card'> <img src='" + productRelacionado.imgSrc + "' style='width: 300%;' class='card-img-top img-thumbnail'>" + "<br>";
        contenido += "Nombre: " + productRelacionado.name + "<br>";
        // contenido += "Descripción: " + productRelacionado.description + "<br>";
        contenido += "Precio: " + productRelacionado.cost + "<br>";
        contenido += "Relevancia: " + productRelacionado.soldCount + "<br>" + "<br>";
        contenido += "<a class='btn btn-light'href='product-info.html'>Más info</a></div>";


        document.getElementById("productosRelacionados").innerHTML = contenido;

        
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (response) {
        if (response.status === "ok") {

            arrayProd = response.data;



            getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {

                arrayRelacionados = resultObj.data.relatedProducts;

                mostrarLista(arrayProd, arrayRelacionados)

            });

        }

    });


});

//ESTRELLITAS (funcion de elementos chequeados y agrega el contenido grafico)

function getRating() {
    var elements = document.getElementsByName("rating");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            return parseInt(elements[i].value)
        }
    }
}


document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("stars").innerHTML = ` 
                                                <div class="star-rating">
                                                <input style="display: none" id="star-1" type="radio" name="rating" value="1" />
                                                <label for="star-1" title="1 stars">
                                                <i class="active fa fa-star"></i>
                                                </label>

                                                <input style="display: none" id="star-2" type="radio" name="rating" value="2" />
                                                <label for="star-2" title="2 stars">
                                                <i class="active fa fa-star"></i>
                                                </label>

                                                <input style="display: none" id="star-3" type="radio" name="rating" value="3" />
                                                <label for="star-3" title="3 stars">
                                                <i class="active fa fa-star"></i>
                                                </label>

                                                <input style="display: none" id="star-4" type="radio" name="rating" value="4" />
                                                <label for="star-4" title="4 stars">
                                                <i class="active fa fa-star"></i>
                                                </label>

                                                <input style="display: none" id="star-5" type="radio" name="rating" value="5" />
                                                <label for="star-5" title="5 stars">
                                                <i class="active fa fa-star"></i>
                                                </label>

                                                </div> `;


});


