/*19. Solicitar un nombre al usuario y:
- Mostrar en una ventana emergente el tipo de dato ingresado entre comillas sencillas
- Mostrar en la interfaz de usuario el nombre ingresado entre comillas dobles
Ej entrada: Pepita
Es salida:
- El tipo de dato ingresado es: 'string'
- El valor ingresado es: "Pepita"*/

const nombre = prompt('Ingrese su nombre.');
console.log(nombre);
alert('El tipo de dato es:' + ' ' + '"' + typeof nombre + '"'); 
document.write('El valor ingresado es:' + ' ' + '"' + nombre + '"');