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
      return result;

    });
}

var productosArray = [];
var minPrecio = undefined;
var maxPrecio = undefined;
var buscar;

function sortProductos(criterio, array) {
  let result = []

  if (criterio === 1) {
    result = array.sort(
      function (a, b) {
        if (a.cost < b.cost) { return -1; }
        if (a.cost > b.cost) { return 1; }
        return 0; //los numeros son iguales
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

    if (((minPrecio == undefined) || (minPrecio != undefined && parseInt(producto.cost) >= minPrecio)) &&
      ((maxPrecio == undefined) || (maxPrecio != undefined && parseInt(producto.cost) <= maxPrecio)))

      if (buscar == undefined || producto.name.toLowerCase().includes(buscar)) {


        contenido += "Nombre: " + producto.name + "<br>";
        contenido += "Descripción: " + producto.description + "<br>";
        contenido += "Precio: " + producto.cost + "<br>";
        contenido += "Relevancia: " + producto.soldCount + "<br>";
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

  minPrecio = document.getElementById("minPrecio").value;
  maxPrecio = document.getElementById("maxPrecio").value;
 
  if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio) >= 0)) {
    minPrecio = parseInt(minPrecio);
  }
  else {
    minPrecio = undefined;
  }

  if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0) {
    maxPrecio = parseInt(maxPrecio);
  }
  else {
    maxPrecio = undefined;
  }

  mostrarLista(productosArray);
});

//ORDEN AZ
document.getElementById("AZ").addEventListener("click", function () {

  productosArray = productosArray.sort((a, b) => {
    if (a.name > b.name) { return 1 }
    if (a.name < b.name) { return -1 }
    return 0
  })
  mostrarLista(productosArray);
});

//Z-A
document.getElementById("ZA").addEventListener("click", function () {

  productosArray = productosArray.sort((a, b) => {
    if (a.name < b.name) { return 1 }
    if (a.name > b.name) { return -1 }
    return 0
  })
  mostrarLista(productosArray);
});


document.getElementById("Maximo").addEventListener("click", function () {

  productosArray = productosArray.sort((a, b) => {
    if (a.cost < b.cost) { return 1 }
    if (a.cost > b.cost) { return -1 }
    return 0
  })
  mostrarLista(productosArray);
});


document.getElementById("Minimo").addEventListener("click", function () {

  productosArray = productosArray.sort((a, b) => {
    if (a.cost > b.cost) { return 1 }
    if (a.cost < b.cost) { return -1 }
    return 0
  })
  mostrarLista(productosArray);
});


document.getElementById("buscar").addEventListener('input', function() {
  buscar = document.getElementById("buscar").value.toLowerCase()
  //console.log("anda")
  mostrarLista(productosArray);
});


//RELEVANCIA
document.getElementById("Relevancia").addEventListener("click", function () {

  productosArray = productosArray.sort((a, b) => {
    if (a.soldCount < b.soldCount) { return 1 }
    if (a.soldCount > b.soldCount) { return -1 }
    return 0
  })
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