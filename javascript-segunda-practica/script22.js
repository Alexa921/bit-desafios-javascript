/*22. Solicitar que el usuario ingrese un texto (cualquier) y mostrarle al usuario
el texto ingresado entre comillas sencillas.  Si el usuario no ingresa un texto
mostrarle una alerta indicando su error.*/

let texto = prompt("Ingrese un texto");
document.write(`"${texto}"`);
if (texto) {
    console.log();
    } else {
        alert("Error: No ingresó un texto");
        }
