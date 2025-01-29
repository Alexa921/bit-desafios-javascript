/*2. Crear un formulario para que el usuario ingrese: usuario y contraseña, al
hacer click al botón de enviar mostrarle al usuario una ventana emergente
informando que se esta procesando la solicitud, almacenar los datos ingresados
en variables, imprimir por consola los valores de las variables.*/

const elementoBotonEnviar = document.getElementById('button');
const elementoUsuario = document.getElementById('usuario');
const elementoContraseña = document.getElementById('contraseña');

elementoBotonEnviar.addEventListener('click', enviar);

let usuario = '';
let contraseña = '';

function enviar() {
    alert("Se esta procesando la solicitud");
    elementoBotonEnviar.setAttribute('usuario','contraseña')
    console.log(elementoUsuario.value);
    console.log(elementoContraseña.value);
    usuario = usuario +1;
    contraseña = contraseña +1;
}
