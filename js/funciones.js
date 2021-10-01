
/*Esta funcion genera el menu dinamico en base a los profuctos existentes
  Retorna el id de los productos elegidos*/

const showMenu = () =>{
    let menu = 'Elija un profucto: \n';
    products.forEach((product)=>{
        menu +=  product.id + '.-' + product.mark + '\n'
    });
    menu += (products.length +1) + '.-Salir'
    return parseInt(prompt(menu));
}


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
        cart += (quantity * found.price);
        products[option-1].stock -= quantity;
        alert(`motor ${found.mark} fue agregado al carrito`);    
    }
}
