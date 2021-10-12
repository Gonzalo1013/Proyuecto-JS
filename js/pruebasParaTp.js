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

