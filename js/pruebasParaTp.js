//LLAMAMOS A NUESTRO OBJETO 
// const product = JSON.parse(data);

//AQUI ESTA LA FUNCION QUE CUANDO CLICKEAMOS LOS BOTONES DE 'add to cart' 
//se guarda en el localstorage el objeto seleccionado

// let botones = document.getElementById('buttonAddToCart');

// let mensaje = document.createElement('h1');

// botones.addEventListener('click' , funcionHola);

// function funcionHola () {
    
//     mensaje.innerHTML = ('Hola CODERS');

//     document.body.appendChild(mensaje);

// }


// let botones = document.getElementsByClassName('buttonAddToCart');
// let mensaje = document.createElement('h1');

// botones.addEventListener('click' , funcionMensaje);

// function funcionMensaje () {
    
//     mensaje.innerHTML = ('HOLA CODERS');
    
//     document.body.appendChild(mensaje);
    
// }

// localStorage.setItem ('bienvenidos' , 'Hola Coders') ;
// localStorage.setItem ('esValido' , true) ;
// localStorage.setItem ('unNumero' , 20) ;

// let mensaje = localStorage.getItem('bienvenidos') ;
// let bandera = localStorage.getItem('esValido') ;
// let numero = localStorage.getItem('unNumero');

// console.log(mensaje) ;
// console.log(bandera);
// console.log(numero);

// for (let i = 0; i < localStorage.length; i++) {

//     let clave = localStorage.key(i);
//     console.log(`clave: ${clave}`) ;
//     console.log(`valor: ${localStorage.getItem(clave)}`) ;
// }
// localStorage.clear();


// let productos = [{id: 1 , item: 'manzana' , stock: 2},   //0
//                 {id: 2 , item: 'zanahoria' , stock: 3}, //1
//                 {id: 3 , item: 'banjana' , stock: 2},  //2
//                 {id: 4 , item: 'merluza' , stock: 4}   //3
// ];

// const guardarLocal = (asd , gonzalo) => {localStorage.setItem(asd , gonzalo)};

// for (let producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// localStorage.clear()

// guardarLocal("listaproductos" , JSON.stringify(productos));

// const products = JSON.parse(data);

const guardarLocal = (clave , valor) => {localStorage.setItem(clave , valor)};
    for( let producto of products) {
        guardarLocal( producto.mark , JSON.stringify(producto) );
    }

    
    let ButtonOne = document.getElementById('buttonAddToCartOne');
    
    let mensajeOne = document.createElement('h3');
    
    ButtonOne.addEventListener('click' , addToCart);
    
    function addToCart () {
        
        const almacenados = JSON.parse(localStorage.getItem("Honda"));
        
        mensajeOne.innerHTML = (`El motor ${almacenados.mark} fue gargado al carrito, su precio es de:  $${almacenados.price}`);
        
        document.body.appendChild(mensajeOne);
    };

    let buttonTwo = document.getElementById('buttonAddToCartTwo');
    
    let mensajeTwo = document.createElement('h3');
    
    // buttonTwo.addEventListener('click' , addToCartTwo);
    
    // function addToCartTwo () {
        buttonTwo.onclick = () => {
        const almacenadosTwo = JSON.parse(localStorage.getItem("Yamaha"));
        
        mensajeTwo.innerHTML = (`El motor ${almacenadosTwo.mark} fue gargado al carrito, su precio es de:  $${almacenadosTwo.price}`);
        
        document.body.appendChild(mensajeTwo);
    };

    let buttonthree = document.getElementById('buttonAddToCartThree');
    
    let mensajeThree = document.createElement('h3');
    
    buttonthree.addEventListener('click' , addToCartThree);
    
    function addToCartThree () {
        
        const almacenadosThree = JSON.parse(localStorage.getItem("Mercury"));
        
        mensajeThree.innerHTML = (`El motor ${almacenadosThree.mark} fue gargado al carrito, su precio es de:  $${almacenadosThree.price}`);
        
        document.body.appendChild(mensajeThree);
    };

    let buttonFour = document.getElementById('buttonAddToCartFour');
    
    let mensajeFour = document.createElement('h3');
    
    buttonFour.addEventListener('click' , addToCartFour);
    
    function addToCartFour () {
        
        const almacenadosFour = JSON.parse(localStorage.getItem("Toyota"));
        
        mensajeFour.innerHTML = (`El motor ${almacenadosFour.mark} fue gargado al carrito, su precio es de:  $${almacenadosFour.price}`);
        
        document.body.appendChild(mensajeFour);
    };



// SE CREO UN BOTON PARA PRACTICAR LO APRENDIDO.
// $("body").prepend('<button class="botonPrueba">CLICK</button>');
// $('.botonPrueba').on('click' , function (){
//     console.log('SE HIZO CLICK');
// })
// $('.botonPrueba').on('dblclick' , function (){
//     console.log('se hizo doble click')
// })


//PRACTICAMOS HACIENDO EL BOX AMARILLO

// $(".sectionCart").prepend('<button id="btnDown">slideDown</button>');
// $(".sectionCart").prepend('<button id="btnUp">slideUp</button>');
// $(".sectionCart").prepend('<button id="btnToggle">slideToggle</button>');
// $(".sectionCart").prepend(`<div id="divUno" style="display: none ; background-color: yellow ; height: 150px ; width: 1000px ; color: black ; margin: auto ; text-align: center" >
//     <p>Hola Coders</p>
//     <h3>Soy el mejor</h3>
// </div>`);
// $("#btnDown").click (() => {
    //     $("#divUno").slideDown(1000);
    // });
// $("#btnUp").click (() => {
//     $("#divUno").slideUp(1000);
// });
// $("#btnToggle").click (() => {
//     $("#divUno").toggle(1000);
// });


//CREAMOS UN CATALOGO QUE ESTA OCULTO Y AL CLICKEAR EL BOTON 'VER CATALOGO LO MUESTRA Y APARECE UN BOTON PARA OCULTARLO.'
$(".sectionCart").append('<button id="btnMostrarCatalogo">Mostrar Catalogo</button>');
$(".sectionCart").append('<button id="ocultarCatalogo" style="display: none">Ocultar Catalogo</button>');

for(let prod of products){
        $(".mostrarCatalogo").append(`<div class="catalogo" style="display:none">
                                        <h3>Nombre ${prod.mark}</h3>
                                        <b>Precio: $${prod.price}</b>
                                        <button id="buy${prod.id}">Comprar</button>
                                        </div>`);

        $("#btnMostrarCatalogo").click (() => {
            $(".catalogo").fadeIn(1000);
            $("#ocultarCatalogo").slideDown("slow");
        });
        $("#ocultarCatalogo").click(() => {
            $(".catalogo").fadeOut(1000);
            $("#ocultarCatalogo").slideUp("slow");

        });
        
        $(`#buy${prod.id}`).on('click', function (){
            console.log(`Agregaste al carrito un motor ${prod.mark} modelo ${prod.model}`);
            let transformar = JSON.stringify(prod);
            localStorage.setItem('compraAgregada', transformar);
        });
    }
    
    
    
    //crear funcion donde al clickear un botonm de comprar o agregasr al cart envie la info al local.  me sume cada compra que hago y muestre un alert lo que se compro y cuanto lleva gastando,
    // o mejor si a un boton mostrar carrito te da un alert donde dice que compraste y de cuianto es el gasto
$(".mostrarCatalogo").append('<button class="showCartVer">Ver Carrito</button>');
$(".showCartVer").css('background-color', 'grey');
$(".showCartVer").css('padding', '10px 20px');
$(".showCartVer").css('width', '100%');

$(".showCartVer").click(function (e) {
    console.log(`${e.target.innerHTML}`);
    const inCart = JSON.parse(localStorage.getItem("compraAgregada"));
    
    // localStorage.getItem(`${transformar}`)
    // JSON.case(transformar)
        alert(`YA CASI ES TUYO!!\n 
        ${inCart.mark} ${inCart.model}\n
        $${inCart.price}`);
    });
    
    
    
    
    
    


$("body").prepend(`<div class="animateImg" style=" display: none , background-color: yellow,">
                    <img class="imgAnimate" style="display:none" src="https://www.pescaargentina.com.ar/imagenes/noticias_web/sgf_294-1.jpg" alt="lancha">
                    </div>`);


                    $(".animateImg").animate({
                                                'padding': '50px',
                                                'height': '200px',
                                                'width': '50%',
                    },
                    "slow",
                    function () {
                        $(".imgAnimate").css({'background-color': 'white',
                                                "padding": "20px",
                                                "border-radius": "10px",
                    })
                                        .slideDown(2100)
                                        .slideUp(2000);
                        }
                    )
                        .slideDown(2000)
                        .delay(4000)
                        .slideUp(2000);
                        
                        console.log('fin de la animacion');
                    