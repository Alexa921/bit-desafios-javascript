/*24. Solicitar al usuario un código de acceso, si el código es:
- AAA: mostrar acceso a administrador
- BBB: mostrar acceso a profesor
- CCC: mostrar acceso a estudiante
- DDD: mostrar acceso a acudiente
De otro modo informar que no tiene un código válido.*/

const codigo = prompt("Ingrese código de acceso.");
switch (codigo) {
    case "AAA":
        alert("Acceso a administrador");
        break;
        case "BBB":
            alert("Acceso a profesor");
            break;
            case "CCC":
                alert("Acceso a estudiante");
                break;
                case "DDD":
                    alert("Acceso a acudiente");
                    break;
                    default:
                        alert("No tiene un código válido");
                        break;
                        }
