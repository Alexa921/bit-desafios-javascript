const estudiantesMujeres = ["Valentina", "Manuela", "Alexandra"];
const estudiantesHombres = ["Brayan", "Daniel", "Juan jose", "Nicolas", "Sergio"];

for (let i = 0; i < estudiantesMujeres.length; i++) {
    document.write(estudiantesMujeres[i] + "<br>");
}

let contador = 0;

while (contador < estudiantesHombres.length) {
    document.write(estudiantesHombres[contador] + "<br>");
    contador++;
}