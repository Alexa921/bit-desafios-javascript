/*20. Solicitar al usuario un nombre, una edad y que responda si está activo o no
- Mostrar en la consola el tipo de dato ingresado por cada entrada
- Mostrar en la interfaz de usuario el nombre ingresado entre comillas sencillas
- Mostrar en una ventana emergente si está autorizado o no entre comillas dobles
Ej entrada: Pepita 20 si
Ej salida:
- El tipo de dato ingresado para nombre es: 'string' ...
- El nombre ingresado es: 'Pepita'
- "Si" está autorizado*/

const nombre = prompt('Ingrese su nombre.');
const edad = prompt('Ingrese su edad.');
const activo = prompt('Ingrese si esta o no activo.');
console.log(nombre);
console.log(edad);
console.log(activo);
console.log('El tipo de dato es:' + ' ' + "'" + typeof nombre + "'" + ' ' + "'" + typeof edad + "'" + "'" + ' ' + "'" + typeof activo + "'"); 
document.write('El valor ingresado es:' + ' ' + "'" + nombre + ' ' + "'" + 'y tiene'+ ' ' + "'" + edad + "'");
document.write('"' + ' ' + activo + ' ' + '"'  + ' ' + 'esta autorizado');