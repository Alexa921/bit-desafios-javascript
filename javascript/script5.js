/*5. Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre.*/

function presentate(nombre, apellido) {
    return `${apellido} ${nombre}`;
}

let nombreCompanero = presentate('Valentina', 'Restan');
let nombreCompleto = presentate('Alexandra', 'Restrepo');
console.log(nombreCompleto);
console.log(nombreCompanero);