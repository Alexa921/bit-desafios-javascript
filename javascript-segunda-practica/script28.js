/*28. Solicitar al usuario un número entero positivo, mostrar al usuario las
tablas de multiplicar desde cero hasta el número ingresado.
Ej entrada: 2
Ej salida:
0 x 0 = 0
0 x 1 = 0
1 x 0 = 0
1 x 1 = 1*/

let datos1 = parseInt(prompt("Ingrese un numero entero positivo:"));
for (let i = 0; i <= datos1; i++) {
  for (let j = 0; j <= 10; j++) {
    document.write(`${i} x ${j} = ${i * j} <br>`);
  }
}

/*No esta listo*/