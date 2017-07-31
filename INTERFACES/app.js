"use strict";
function cocinar(carne) {
    console.log("Cocinando la carne de " + carne.tipo);
}
;
function fritar(carne) {
    console.log("Fritando la carne de " + carne.tipo);
}
;
var carne = {
    tipo: "Res",
    peso: 15
};
cocinar(carne);
fritar(carne);
