

//  alert('Bienvenidos a Motores Ferchu, esperamos poder ayudarte con lo que buscas.');

do {
    let option = showMenu();
    if (option === products.length +1){
        showCart();
    }else {
        if (option === products.length + 2) break;
        let qty = parseInt(prompt(selectedQty))
        addToCart(option, qty);
        }
        
        resp = prompt('Desea agregar mas productos al carrito? s/n');

}while(resp === 'S' || resp === 's');

// if(cart > 0) {
//     alert(`Su compra tiene un valor de us$${cart}`);
// }
showTotal();

    alert('Gracias por su compra');


