/*14. Crear una función que reciba 1 número, imprimir si es negativo o si es
positivo o si es cero.*/

function imprimirPositivoNegativo(num1) {
    if (num1 < 0) {
        console.log("Tu numero es negativo.");
    } else if (num1 > 0) {
        console.log("Tu numero es positivo.");
    } if (num1 === 0) {
        console.log("Tu numero es cero.");
    }
}
imprimirPositivoNegativo(4);
imprimirPositivoNegativo(-4);
imprimirPositivoNegativo(0);