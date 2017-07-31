"use strict";
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion("Jorge"));
console.log(miFuncionF("Andres"));
console.log(miFuncion2(1, 2));
console.log(miFuncion2F(3, 4));
var miFuncion3 = function (a) {
    a.toUpperCase();
    return a;
};
var miFuncion3F = function (a) {
    a = a.toUpperCase();
    return a;
};
console.log(miFuncion3F("El Barto"));
var hulk = {
    nombre: "Hulk",
    golpe: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " golpea"); }, 1500);
    }
};
hulk.golpe();
