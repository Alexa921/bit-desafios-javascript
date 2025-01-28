/*31. Solicitar al usuario los datos necesarios para un registro médico, mostrar
en la interfaz de usuario un resumen de los datos ingresados.*/

const nombre = prompt('Ingerese su nombre:');
const apellido = prompt('Ingrese su apellido:');
const genero = prompt('Ingrese su genero:')
const edad = prompt('Ingrese su edad:');
const peso = prompt('Ingrese su peso:');
const altura = prompt('Ingrese su altura:');

const registroMedico = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    genero: genero,
    peso: peso,
    altura: altura,
}
console.log(registroMedico);
document.write(registroMedico);

/*incompleto*/
