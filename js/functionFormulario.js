/*FUNCTION FOR THE FORM*/

let formulario = document.getElementById('formContact');
let datosIngresados = document.createElement('p');

formulario.addEventListener('submit' , textoFormulario);

function textoFormulario (e) {
    e.preventDefault();
    let formulario = e.target;
    datosIngresados.innerHTML = (`${formulario.children[1].value} 
                                    ${formulario.children[3].value} 
                                    ${formulario.children[5].value} 
                                    ${formulario.children[7].value}`);
    
    document.body.appendChild(datosIngresados);
    // console.log('No se refresca');
    // console.log(formulario.children[1].value);
    // console.log(formulario.children[3].value);
    // console.log(formulario.children[5].value);
    // console.log(formulario.children[7].value);
    // console.log(e);
}


let boton = document.getElementById('buttonform');
let mensaje = document.createElement('h1');

boton.onclick = () => {
    mensaje.innerHTML = ('Hola Coders');
    document.body.appendChild(mensaje);
}