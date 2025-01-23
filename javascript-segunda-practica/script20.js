/*20. Solicitar al usuario un nombre, una edad y que responda si está activo o no
- Mostrar en la consola el tipo de dato ingresado por cada entrada
- Mostrar en la interfaz de usuario el nombre ingresado entre comillas sencillas
- Mostrar en una ventana emergente si está autorizado o no entre comillas dobles
Ej entrada: Pepita 20 si
Ej salida:
- El tipo de dato ingresado para nombre es: 'string' ...
- El nombre ingresado es: 'Pepita'
- "Si" está autorizado*/


const datos = prompt("¿Cual es tu nombre?");
const datos1 = prompt ("¿cual es tu edad?");
const datos2 = prompt("¿estas activo?");

console.log("El tipo de dato ingresado para nombre es: '" + typeof datos + "'");
console.log("El tipo de dato ingresado para edad es: '" + typeof datos1 + "'");
console.log(
  "El tipo de dato ingresado para activo es: '" + typeof datos2 + "'"
);

document.write("El nombre ingresado es: '" + datos + "'");

alert('"' + datos2 + '"' + " " + "está autorizado"); 
