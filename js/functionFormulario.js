/*FUNCTION PARA EL FORMULARIO*/

let formulario = document.getElementById('formContact');
let datosIngresados = document.createElement('p');

formulario.addEventListener('submit' , textoFormulario);
//Aqui generamos un mensaje de que el formulario se envio y tambien un botton que nos muestre la consulta.
function textoFormulario (e) {
    e.preventDefault();
    let formulario = e.target;
    $(".mainContacto").append(`<p style="font-weight: bold">Su consulta fue enviada exitosamente</p>`)
    $(".mainContacto").append(`<button class="verConsulta btn btn-primary">Ver consulta</button>`)
    //Con el evento click vemos la targeta de con los datos ingresados.
        $(".verConsulta").click(() => {
            $(".mainContacto").prepend(`<div class="card" id="ocultarConsulta" style="width: 18rem; text-align: center">
                                        <img class="ocultar" src="../img/cerrar-simbolo-de-boton-circular.png">
                                        <h4>${formulario.children[1].value} 
                                        ${formulario.children[3].value}</h4>
                                        <p>${formulario.children[5].value}</p> 
                                        <p>Consulta: ${formulario.children[7].value}</p>
                                    </div>`);
        document.body.appendChild(datosIngresados);
        //Con esta funcion cerramos la ventana emergente de la consulta.
        $(".ocultar").click(() => {
            ocultarConsulta.style.display = 'none'
        })
    });
}