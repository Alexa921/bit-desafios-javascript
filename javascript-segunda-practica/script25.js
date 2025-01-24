/*25. Solicitar al usuario un número entero positivo, mostrar al usuario los
números desde cero hasta el número ingresado.*/

let numeroEntero = prompt("Ingrese un número entero y positivo.");
for(let contador = 0; contador <= numeroEntero; contador++) {
    document.write(contador);
}
