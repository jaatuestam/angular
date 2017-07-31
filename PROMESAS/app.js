"use strict";
var promesa1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //Termina bien
        //resolve();
        //Termina mal
        reject();
    }, 1500);
});
promesa1.then(function () {
    console.log("Termina bien");
}, function () {
    console.error("Termina mal");
});
