/*4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.*/

function presentar(nombre, apellido, edad = 100) {
    console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`);
}
presentar('Pablo', 'Perez', 20);
presentar('Pablo', 'Perez');