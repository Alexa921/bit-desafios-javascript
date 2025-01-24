/*25. Solicitar al usuario un número entero positivo, mostrar al usuario los
números desde cero hasta el número ingresado cada número en una linea.*/

let numeroEntero = prompt("Ingrese un número entero y positivo.");
for(let i = 0; i <= numeroEntero; i++) {
    document.write(i + "<br>");
}
