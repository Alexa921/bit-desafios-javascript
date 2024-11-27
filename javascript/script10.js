/*10. Crear una función que reciba 4 números, mostrar el resultado de: a/b*(c+d)*/ 

function operacion(num1, num2, num3, num4) {
    return (num1 / num2) * (num3 + num4);
}
let resultado = operacion(68, 4, 12, 9);
console.log(resultado);