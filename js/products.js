//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const PRODUCTOS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json"

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
      return result

    });
}

var productosArray = [];

function mostrarLista(array) {
  let contenido = "";
  for (let i = 0; i < array.length; i++) {
    let producto = array[i]
    
    contenido += "Nombre: " + producto.name + "<br>";
    contenido += "Descripción: " + producto.description + "<br>" ;
    contenido += "Precio: " + producto.cost + "<br>"
    contenido += "<br><br><hr>"
    
  }
  document.getElementById("Productos").innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", function (e) {

  getJSONData(PRODUCTOS_URL).then(function (response) {
    if (response.status === "ok") {
      productosArray = response.data;

      mostrarLista(productosArray);

    }

  });
});
