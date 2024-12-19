function formulario(idAlNacer, interesSexual) {
    if(idAlNacer === "masculino") {
        console.log("Hemos comprobado que usted se identifica con el genero masculino.");
    } else {
        console.log("Hemos comprobado que usted se identifica con el genero femenino.");
    }

    if(interesSexual === "heterosexual") {
        console.log("Hemos comprobado que usted se identifica como heterosexual.");
    } else {
        console.log("Hemos comprobado que usted se identifica como homosexual.");
    }
}

formulario("masculino", "heterosexual",);
formulario("femenino", "homosexual");
