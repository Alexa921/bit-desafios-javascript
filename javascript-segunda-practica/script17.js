/*17. Solicitar primero el nombre, luego solicitar el apellido y por
último solicitar la edad al usuario, mostrar en la interfaz de usuario el mensaje:
Ej entrada: Pepita Pérez 16
Ej salida: Pérez Pepita tiene 16 años.*/

const nombre = prompt('Ingerese su nombre');
console.log('nombre');
const apellido = prompt('Ingrese su apellido');
console.log('apellido');
const edad = prompt('Ingerese su edad');
console.log('edad');
const resultado = alert(apellido + ' ' + nombre + ' ' + 'tiene' + ' ' + edad + ' ' + 'años.');
console.log(resultado);