/*9. 
- Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda.
- Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.
Ej entrada: suma, 8, 4
Ej salida: 8 + 4 = 12*/

// 9a

function sumar2(a, b) {
    return a + b;
}
let resultadoSuma = sumar2(8, 4);
console.log(resultadoSuma);


function restar2(a, b) {
    return a - b;
}
let resultadoResta = restar2(8, 4);
console.log(resultadoResta);


function multiplicar2(a, b) {
    return a * b;
}
let resultadoMultiplicacion = multiplicar2(8, 4);
console.log(resultadoMultiplicacion);


function dividir2(a, b) {
    return a / b;
}
let resultadoDividir = dividir2(8, 4);
console.log(resultadoDividir);


function modulo2(a, b) {
    return a % b;
}
let resultadoModulo = modulo2(8, 4);
console.log(resultadoModulo);


function potencia2(a, b) {
    return a ** b;
}
let resultadoPotencia = potencia2(8, 4);
console.log(resultadoPotencia);


// 9b

function operar(operacion, num1, num2) {
    if (operacion === "sumar2") {
        console.log(num1 + " + " + num2 + " = " + sumar2(num1, num2));
    } if (operacion === "restar2") {
        console.log(num1 + " - " + num2 + " = " + restar2(num1, num2));
    } if (operacion === "multiplicar2") {
        console.log(num1 + " x " + num2 + " = " + multiplicar2(num1, num2));
    } if (operacion === "dividir2") {
        console.log(num1 + " / " + num2 + " = " + dividir2(num1, num2));
    } if (operacion === "modulo2") {
        console.log(num1 + " % " + num2 + " = " + modulo2(num1, num2));
    } if (operacion === "potencia2") {
        console.log(num1 + " ^ " + num2 + " = " + potencia2(num1, num2));
    } 
}
operar("sumar2", 8, 4);
operar("restar2", 8, 4);
operar("multiplicar2", 8, 4);
operar("dividir2", 8, 4);
operar("modulo2", 8, 4);
operar("potencia2", 8, 4);