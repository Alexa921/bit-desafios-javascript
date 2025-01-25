/*29. Crear una constante y asignarle un número entre 1 y 9.  Solicitar al usuario
que adivine el número, permitir máximo 3 intentos.*/
const numeroSecreto = 5;
let intentos = 0;
let preguntar = true;
let gano = false;

do {
    const numeroUsuario = parent(prompt('Tienes 3 intentos para adivinar el número secreto, ingresa unentero entre 1 y 9:'));
    intentos++
    if (numeroUsuario === numeroSecreto) {
        gano = true;
        preguntar = false;
        }
        if (intentos === 3) {
            preguntar = false;
        }
} while (preguntar);
if (gano) {
    document.write("¡Ganaste! adivinaste el número" + numeroSecreto + "en el intento" + intentos + "intento.");
} else {
    document.write("Lo siento, no adivinaste el" + numeroSecreto + "tuviste" + intentos + "intentos."); 
}
                    
                    


    



