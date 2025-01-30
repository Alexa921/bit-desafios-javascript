/*25. Solicitar al usuario un número entero positivo, mostrar al usuario los
números desde cero hasta el número ingresado.*/

let numeroEntero = parseInt(prompt("Ingrese un número entero positivo."));
for(let i = 0; i <= numeroEntero; i++) {
    document.write(i);
}
