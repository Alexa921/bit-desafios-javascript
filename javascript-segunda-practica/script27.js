/*27. Solicitar al usuario un número entero positivo, mostrar al usuario los
números desde 1 hasta el número ingresado menos 1 cada número debe estar
separado por una coma y un espacio, el número final debe terminar con punto.
Ej entrada: 5
Ej salida: 1, 2, 3, 4.*/

let numeroEntero = prompt("Ingrese un número entero y positivo.");
for(let i = 1; i < numeroEntero; i++) {
    if (i === numeroEntero -1) {
        document.write(i + ".");
    } else {
        document.write(i + ", ");
    }
}