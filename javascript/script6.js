/*6. Crear una función que reciba cuatro párametros, un nombre, una prenda, un
color y una cantidad y retorne: ____ tiene __ ____ de color ____.
Ej entrada: pepita, camisas, azul, 2
Ej salida: Pepita tiene 2 camisas de color azul.*/

function ejemplo(nombre, prenda, color, cantidad) {
    return `${nombre} tiene ${cantidad} ${prenda} de color ${color}.`;
}

let ejemplo1 = ejemplo('Pepita', 'camisas', 'azul', 2);
let ejemplo2 = ejemplo('Juan', 'pantalones', 'negro', 4);
console.log(ejemplo1);
console.log(ejemplo2);