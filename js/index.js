//Funcion para el preload
window.onload = function (){
    $("#onload").fadeOut();
    $("body").removeClass("hidden")
}
//ENCERRAR TODO EN UN GRAN FILTER CON CONDICIONALES


//Dentro de la pagina de productos agregamos un botton de "Mostrar Catalogos"
//donde el mismo por medio de toggle muestra 3 bottones mas.
let transform;
$(".contentCatalogos").prepend(`<button id="btnToggle" style="font-size: 1em ; background-color: lightblue ; padding: 5px 10px; ; border-radius: 5px ">Filtrar por</button>`);
$(".contentCatalogos").prepend(`<div id="buttons" style="display: none ; background-color: black ; color: black ; margin: 0px 0px ; padding: 10px ; text-align: left" >
                                    <button id="soloMotores" style="font-size: 1em ; background-color: lightblue ; padding: 5px 10px; ; border-radius: 5px">Motores</button>
                                    <button id="articulos" style="font-size: 1em ; background-color: lightblue ; padding: 5px 10px; ; border-radius: 5px">Articulos</button>
                                </div>`);

                        $("#btnToggle").click (() => {
                            $("#buttons").toggle(1000);
                        });
//En esta funcion mostramos el catalogo de todos los productos
        for(let artics of products) {
            if(artics.product !== "") {
            $(".catalogoTodo").prepend(`<div class="cart">
                                            <img class="imgCard" src="${artics.img}">
                                            <h5>${artics.product}</h5>
                                            <p>${artics.mark}</p>
                                            <p>${artics.model}</p>
                                            <p>$${artics.price}</p>
                                            <button class="btn btn-primary" id="buy${artics.id}">Agregar al carrito</button>
                                        </div>`);
        }
        $(`#buy${artics.id}`).click(() => {
            console.log(`agregaste un/una ${artics.product} ${artics.mark} al carrito`);
            transform = JSON.stringify(artics);
            localStorage.setItem('compraAgregada' , transform);
        });
    };
        
        
    //intentamos filtrar el catalogo por productos de la misma clase
    
//     $("#soloMotores").click(() => { 
//         console.log("it`s ok");
//     let findMotors = products
//     .filter(function(motores){
//         return motores.product === 'motor';
//     })
//     console.log(findMotors);
// })

// $("#articulos").click(() => { 
//     console.log("it`s ok");
//     let findArticulos = products
//     .filter(function(articulos){
//         return articulos.product !== 'motor';
//     })
//     console.log(findArticulos);
// })


// Con esta funcion mostramos solo el catalogo de motores.
$("#soloMotores").click(() => { 
    for(let motores of products) {
            if(motores.product === "motor") {
            $(".catalogoTodo").prepend(`<div class="cart" id="filtradoDeCosas">
                                            <img class="imgCard" src="${motores.img}">
                                            <h5>${motores.product}</h3>
                                            <p>${motores.mark}</p>
                                            <p>${motores.model}</p>
                                            <b>$${motores.price}</b>
                                            <br>
                                            <button class="btn btn-primary" id="buy${motores.id}">Agregar al carrito</button>
                                        </div>`);
        }
        
        $(`#buy${motores.id}`).click(() => {
            console.log(`agregaste un/una ${motores.product} ${motores.mark} al carrito`);
            transform = JSON.stringify(motores);
            localStorage.setItem('compraAgregada' , transform);
        });
    }
});

//Con esta funcion mostramos el catalogo de los articulos excluyendo los motores.
$("#articulos").click(() => {
    console.log("it`s ok");
    for(let articulos of products) {
        if(articulos.product != "motor") {
            $(".catalogoTodo").prepend(`<div class="cart">
                                            <img class="imgCard" src="${articulos.img}">
                                            <h5>${articulos.product}</h5>
                                            <p>${articulos.mark}</p>
                                            <p>${articulos.model}</p>
                                            <b>$${articulos.price}</b>
                                            <br>
                                            <button class="btn btn-primary" id="buy${articulos.id}"> agregar al carrito</button>
                                        </div`)
        }
        $(`#buy${articulos.id}`).click(() => {
            console.log(`agregaste un/una ${articulos.product} ${articulos.mark} al carrito`);
            transform = JSON.stringify(articulos);
            localStorage.setItem('compraAgregada' , transform);
        });
    }
});

//Vamos a AGREGAR un boton par ver LAS COMPRAS deL CARRITO
$(".contentCatalogos").append(`<button class="showCart" style="font-size: 1em ; background-color: lightblue ; padding: 5px 10px; ; border-radius: 5px ">ver carrito</button>`);
$(".showCart").click((e) => {
        // console.log(e);
        if(localStorage !== "") {
        let inCart = JSON.parse(localStorage.getItem("compraAgregada"));
        $(".catalogoTodo").append(`<div class="styleShowCart" id="cerrarVentana" style=" color: white">
                                        <img class="ocultar" src="../img/cerrar-simbolo-de-boton-circular.png">
                                        <img class="imgShowCart" src="${inCart.img}">
                                        <p>Estas a punto de comprar un ${inCart.product} ${inCart.mark} por solo $${inCart.price}.<p>
                                        <button class="buyItem btn-primary">Comprar</button>
                                        <button class="eliminarCompra btn-primary">Eliminar</button>
                                    </div> `)
        $(".buyItem").click(() => {
            console.log(`Gracias por tu compra`);
            $(".respuestaDeLaCompra").prepend(`<p>Gracias por su compra!</p>`);
            cerrarVentana.style.display = 'none'
            localStorage.clear();    
        });
        $(".eliminarCompra").click(() => {
            $(".respuestaDeLaCompra").prepend(`<p class="addTextDelate" >eliminaste ${inCart.product} del carrito</p>`);
            cerrarVentana.style.display = 'none'
            localStorage.clear();
        });
        $(".ocultar").click(() =>{
            cerrarVentana.style.display = 'none'
        });
    }
});