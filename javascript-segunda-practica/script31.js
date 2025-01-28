/*31. Solicitar al usuario la cantidad de materias a ingresar, solicitar el nombre
de cada materia y mostrar al final los nombres de todas las materias ingresadas.*/

const cantidadMaterias = prompt('Ingrese cantidad de materias:');
const nombresMaterias = [];

let indice = 0;
while(indice < cantidadMaterias) {
    const nombreMateria = prompt('Ingrese nombre de la materia: ');
    nombresMaterias[indice] = nombreMateria;
    indice++
}
document.write(nombresMaterias + "<br>");

/*No esta terminado*/