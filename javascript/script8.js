//OPERADORES

/*8. Crear cinco funciones, (sumar, restar, multiplicar, dividir, módulo), debe
recibir 2 números e imprimir el resultado así:
Ej entrada: 8, 4
Ej salida: 8 + 4 = 12*/

function sumar(numero1, numero2) {
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}
sumar(8, 4);
sumar(100, 5);


function restar(numero1, numero2) {
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
}
restar(8, 4);
restar(100, 5);

function multiplicar(numero1, numero2) {
    console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
}
multiplicar(8, 4);
multiplicar(100, 5);

function dividir(numero1, numero2) {
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
}
dividir(8, 4);
dividir(100, 5);

function modulo(numero1, numero2) {
    console.log(`${numero1} % ${numero2} = ${numero1 % numero2}`);
}
modulo(8, 4);
modulo(100, 5);

function potencia(numero1, numero2) {
    console.log(`${numero1} ^ ${numero2} = ${numero1 ** numero2}`)
}
potencia(8, 4);
potencia(100, 5);