/*12. Crear una función que reciba 1 número, imprimir si es negativo o si es positivo.*/

function imprimirPositivoNegativo(num1) {
    if (num1 <= 0) {
        console.log("Tu numero es negativo.");
    } else {
        console.log("Tu numero es positivo.");
    }
}
imprimirPositivoNegativo(4);
imprimirPositivoNegativo(-4);