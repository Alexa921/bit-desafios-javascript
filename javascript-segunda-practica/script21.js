/*21. Solicitar al usuario que ingrese tres números, mostrarle al usuario el
resultado de las cuatro operaciones aritmeticas básicas.*/

let datos1 = prompt("ingrese el primer numero");
let datos2 = prompt("ingrese el segundo numero");
let datos3 = prompt("ingrese el tercer numero");

let datoscompletossuma = parseInt(datos1) + parseInt(datos2) + parseInt(datos3);
document.write("Resultado de la suma: '" + datoscompletossuma + "' <br>");

let datoscompletosresta =
  parseInt(datos1) - parseInt(datos2) - parseInt(datos3);
document.write("Resultado de la resta: '" + datoscompletosresta + "' <br>");

let datoscompletosmultiplicar =
  parseInt(datos1) * parseInt(datos2) * parseInt(datos3);
document.write(
  "Resultado de la multiplicacion: '" + datoscompletosmultiplicar + "' <br>"
);

let datoscompletosdividir =
  parseInt(datos1) / parseInt(datos2) / parseInt(datos3);
document.write(
  "Resultado de la divicion: '" + datoscompletosdividir + "' <br>"
);

    /*No esta listo*/

