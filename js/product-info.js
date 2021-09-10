
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
            let prodRelacionados = document.getElementById("prodRelacionados");


            titulo.innerHTML = producto.name
            descripcion.innerHTML = "Descripción: " + producto.description
            precio.innerHTML = "Precio: " + producto.cost
            moneda.innerHTML = "Moneda: " + producto.currency
            categoria.innerHTML = "Categoría: " + producto.category
            relevancia.innerHTML = "Relevancia: " + producto.soldCount
            prodRelacionados.innerHTML = "Productos relacionados: " + producto.relatedProducts



        }

    });
});


const PRODUCTOS_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";

var getJSONData = function (url) { // esperamos la respuesta
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

        contenido += "<strong>Puntuación: </strong>" + comentario.score + "<br>";
        contenido += "<strong>Descripción: </strong>" + comentario.description + "<br>";
        contenido += "<strong>Usuario: </strong>" + comentario.user + "<br>";
        contenido += "<strong>Fecha: </strong>" + comentario.dateTime + "<br>";
        contenido += "<br><br>"
    }
    document.getElementById("comentarios").innerHTML = contenido;
}
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTOS_INFO_COMMENTS_URL).then(function (response) {
        if (response.status === "ok") {
            comentariosArray = response.data;

            mostrarComentarios(comentariosArray);
        }

        document.getElementById("coment").addEventListener("click", function () {
            let comentario = document.getElementById("comentarios");
            var comentarios = document.getElementById("text-comentario").value
            if (comentarios != "") {
                localStorage.setItem("comentarios-nuevos", JSON.stringify({ coment: comentarios }));

                let usuarioLogueado = JSON.parse(localStorage.getItem("nombreUsuario"))

                comentario.innerHTML += "<strong>Descripción: </strong>" + comentarios + "<br>" +
                    "<strong>Usuario: </strong>" + usuarioLogueado.username + "<br>" + "<br>" + "<br>";
                document.getElementById("text-comentario").value = ""
            }

        });
    });  //HASTA ACA NO TOCAR NADA!!!!!


    /*arrayComentarios.forEach(function (coment) {
        let puntos = "";
        if (coment.)
        */
    //});

    function getRating() {
        var elements = document.getElementById("rating");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                return parseInt(elements[i].value)
            }
        }
    }
    document.addEventListener("DOMContentLoaded", function (e) {
        document.getElementById("Stars").innerHTML = ` 
                                                <div class="star-rating">
                                                <input id="star-5" type="radio" name="rating" value="5" />
                                                <label for="star-5" title="5 stars">
                                                <i class="active fa fa-star></i>
                                                </label>

                                                <input id="star-4" type="radio" name="rating" value="4" />
                                                <label for="star-4" title="4 stars">
                                                <i class="active fa fa-star></i>
                                                </label>

                                                <input id="star-3" type="radio" name="rating" value="3" />
                                                <label for="star-3" title="3 stars">
                                                <i class="active fa fa-star></i>
                                                </label>

                                                <input id="star-2" type="radio" name="rating" value="2" />
                                                <label for="star-2" title="2 stars">
                                                <i class="active fa fa-star></i>
                                                </label>

                                                <input id="star-1" type="radio" name="rating" value="1" />
                                                <label for="star-1" title="1 stars">
                                                <i class="active fa fa-star></i>
                                                </label>

                                                </div> `


    });
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}