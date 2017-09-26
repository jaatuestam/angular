"use strict";
function activate(nombre, sexo, edad) {
    if (sexo === void 0) { sexo = "mujer"; }
    if (edad) {
        console.log(nombre + " es un(a) " + sexo + " y tiene (" + edad + ") a\u00F1os");
    }
    else {
        console.log(nombre + " es un(a) " + sexo);
    }
}
activate("Jorge", "hombre", 232);
