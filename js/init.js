const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const PRODUCTOS_FIAT_URL = "https://verdeverdad.github.io/e-Mercado/fiat.json";
const CARRITO_URL =  "https://japdevdep.github.io/ecommerce-api/cart/654.json"


var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  let usuario = document.getElementById("miperfil") 
  let usuarioLogueado = JSON.parse(localStorage.getItem("nombreUsuario")) //traigo lo que quedo guardado en el set
  usuario.innerHTML =  usuarioLogueado.username 

 

  document.getElementById("salir").addEventListener("click", function () { //el boton salir va a hacer lo siguiente
    localStorage.removeItem("nombreUsuario");
    window.location = "index.html"
  });

});

/*document.addEventListener("DOMContentLoaded", function (e) {

  let nameRegistrado = document.getElementById("miperfil")
  let nameRegistradoLogueado = JSON.parse(localStorage.getItem("nameRegistrado")) //traigo lo que quedo guardado en el set
  nameRegistrado.innerHTML = nameRegistradoLogueado.nameRegistrado
  
});*/