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
var minPrecio = undefined;
var maxPrecio = undefined;

function sortProductos(criterio, array) {
  let result = []

  if (criterio === 1) {
    result = array.sort(
      function (a, b) {
        if (a.cost < b.cost) { return -1; }
        if (a.cost > b.cost) { return 1; }
        return 0;
      });
  } else if (criterio === 2) {
    result = array.sort(
      function (a, b) {
        if (a.cost > b.cost) { return -1; }
        if (a.cost < b.cost) { return 1; }
        return 0;
      });
  }
}




function mostrarLista(array) {
  let contenido = "";
  for (let i = 0; i < array.length; i++) {
    let producto = array[i]

    if (((minPrecio == undefined) || (minPrecio != undefined && parseInt(producto.cost) <= minPrecio)) &&
      ((maxPrecio == undefined) || (maxPrecio != undefined && parseInt(producto.cost) >= maxPrecio))) {

    
    contenido += "Nombre: " + producto.name + "<br>";
    contenido += "Descripción: " + producto.description + "<br>";
    contenido += "Precio: " + producto.cost + "<br>"
    contenido += "<br><br><hr>"

  }
  document.getElementById("Productos").innerHTML = contenido;
}
}
document.addEventListener("DOMContentLoaded", function (e) {

  getJSONData(PRODUCTOS_URL).then(function (response) {
    if (response.status === "ok") {
      productosArray = response.data;

      mostrarLista(productosArray);

    }

  });
});

//aca el boton filtrar

document.getElementById("filtrar").addEventListener("click", function () {

  let minPrecio = document.getElementById("minPrecio").value;
  let maxPrecio = document.getElementById("maxPrecio").value;

  
  if ((minPrecio == undefined) && (minPrecio != "") && (parseInt(minPrecio)) >= 0) {
    minPrecio = parseInt(minPrecio);
  }
  else {
    minPrecio = undefined;
  } 

  if ((maxPrecio == undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0) {
    maxPrecio = parseInt(maxPrecio);
  }
  else {
    maxPrecio = undefined;
  }
  sortProductos(criterio, productosArray);
  mostrarLista(productosArray);
});




//boton borrar
document.getElementById("borrar").addEventListener("click", function () {
  document.getElementById("minPrecio").value = "";
  document.getElementById("maxPrecio").value = "";

  minPrecio = undefined;
  maxPrecio = undefined;

  mostrarLista(productosArray);
});