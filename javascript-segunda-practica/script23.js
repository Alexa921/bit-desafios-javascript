/*23. Solicitar que el usuario ingrese un nombre y una contraseña, si el usuario
no ingresa alguno de los datos mostrar una alerta con el error, si la contraseña
es diferente de "123ABC" mostrar acceso denegado de otra manera mostrar un
mensaje de bienvenida saludando al usuario.*/

let nombre = prompt("Ingrese su nombre");
let contraseña = prompt("Ingrese su contraseña");

if (nombre && contraseña === "123ABC") {
    alert(`Bienvenido ${nombre}`);
    } else {
        alert("Acceso denegado");
    }

