"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Figura = (function () {
    function Figura(nombre, lados) {
        this.lados = 0;
        this.angulos = 0;
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.lados = lados;
    }
    return Figura;
}());
exports.Figura = Figura;
var cuadro = new Figura("cuadro", 4);
console.log(cuadro);
