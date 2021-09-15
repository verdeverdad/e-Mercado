document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTOS_FIAT_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            let producto = resultObj.data;

            let titulo = document.getElementById("titulo2");
            let descripcion = document.getElementById("descripcion2");
            let precio = document.getElementById("precio2");
            let moneda = document.getElementById("moneda2");
            let categoria = document.getElementById("categoria2");
            let relevancia = document.getElementById("relevancia2");
            let prodRelacionados = document.getElementById("prodRelacionados2");


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

