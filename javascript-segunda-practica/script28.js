/*28. Solicitar al usuario un número entero positivo, mostrar al usuario las
tablas de multiplicar desde cero hasta el número ingresado.
Ej entrada: 2
Ej salida:
0 x 0 = 0
0 x 1 = 0
1 x 0 = 0
1 x 1 = 1*/

let numeroEntero = prompt("Ingrese un número entero y positivo.");
while (numeroEntero <= numero) {
    for (let i = 0; i <= numeroEntero; i++) {
        document.write(`${i} x ${numeroEntero} = ${i * numero}`);
        } 
        numeroEntero++
}

/*No esta listo*/