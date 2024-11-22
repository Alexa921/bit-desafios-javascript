/*2. Crear una función llamada presentarme, dentro crear una variable y asignarle su nombre,
 crear una constante y asignarle su edad, luego imprimir en consola: Hola, soy ____ y tengo ____ años.*/

function presentarme() {
    let miNombre = "Alexandra";
    const miEdad = 21;
    console.log(`Hola, soy ${miNombre} y tengo ${miEdad} años`);
}
presentarme();

/*3. Crear una función que reciba un nombre y edad por parámetros, luego imprimir
en consola: Hola, soy ____ y tengo ____ años.*/

function presentacion(nombre, edad) {
    console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
}
presentacion("Juan", 25);

/*4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.*/

function presentar(nombre, apellido, edad = 100) {
    console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`);
}
presentar('Pablo', 'Perez', 20);
presentar('Pablo', 'Perez');