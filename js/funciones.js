/*Aqui se encuentran todas las funciones necesarias para el desarrollo de FERCHU MOTORS */

/*ESTA CONST ES PARA LLAMAR EL ARRAY EN FORMATO JSON QUE TENEMOS LOCAL EN data.js */ 

const products = JSON.parse(data);


/*Esta funcion genera el menu dinamico en base a los profuctos existentes
  Retorna el id de los productos elegidos*/

const showMenu = () =>{
    let menu = 'Elija un profucto: \n';
    products.forEach((product)=>{
        menu +=  product.id + '.-' + product.mark + '\n'
    });
    menu += (products.length +1) + '.-Ver Carrito \n';
    menu += (products.length +2) + '.-Salir';
    return parseInt(prompt(menu));
}

/*Esta Funcion verifica si hay suficiente STOCK  */
/*donde quantity = es la cantidad deseada por el usuario y
        Stock = es la cantidad que tenemos a disposición*/
    /*DEVUELVE:
    TRUE : si hay stock
    FALSE : si no hay stock*/

const isStock = (quantity, stock) => {
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock es ${stock}`);
        return false;
    }
    else return true
}

/* Esta funcion ejecuta el agregado de los productos seleccionados al carrito
    option = la option seleccionada por el usuario,
    quantity = la cantidad seleccionada por el usuario.
*/
const addToCart = (option, quantity) => {
    const found = products.find(product=>product.id === option)

    if(isStock(quantity, found.stock)){

        cart = localStorage.getItem('cart');

        if(!cart){ // !cart ===> si no existe nada en el carrito 'cart'
            cart = [];
        }else{
            cart = JSON.parse(cart);
        }

        // Nuevo Objeto anidado con la cantidad que se desea, el precio por la cantidad y el objeto ejemplo
                // qty: 5, price: 250 , {"id": 5, "mark": "Toyota", "price": 200, "stock":1};
        let item = {
            qty: quantity, 
            price:quantity * found.price, 
            found
        };
        cart.push(item);

        //Aqui lo que hacemos es remplazar cart por si mismo pero en formato JSON
        cart = JSON.stringify(cart)

        // para subirlo usamos set en vez de get y usamos la misma variable que seria cart
        localStorage.setItem('cart', cart)

        products[option-1].stock -= quantity;
        alert(`motor ${found.mark} fue agregado al carrito`);    
    }
}

/*Esta funcion muestra al usuario los productos a llevar y el total a pagar */
const showTotal = () => {
    let cartToShow = localStorage.getItem('cart');
    cartToShow = JSON.parse(cartToShow);

     if(!cartToShow){ // !cart ===> si no existe nada en el carrito 'cart'
        return false
    }else{
        let dataToShow = "";
        let total  = 0;
        cartToShow.forEach(item => {
            dataToShow += `Producto ${item.found.mark} Cantidad ${item.qty} Precio ${item.price} \n`
            total += item.price;
        })
        dataToShow += `El precio total a pagar es ${total}`
        alert(dataToShow);
    }
    localStorage.clear();
};

/*Esta funcion muestra al usuario los productos que tiene cargados en el carrito */
const showCart = () => {
    let cartToShow = localStorage.getItem('cart');
    cartToShow = JSON.parse(cartToShow);

     if(!cartToShow){ // !cart ===> si no existe nada en el carrito 'cart'
        alert("Aun no tienes productos en el carrito")
    }else{
        let dataToShow = "";
        cartToShow.forEach(item => {
            dataToShow += `Producto ${item.found.mark} Cantidad ${item.qty} Precio ${item.price} \n`
        });
        alert(dataToShow);
    }
};
