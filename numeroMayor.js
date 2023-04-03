"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var Nro = rls.questionInt("Ingrese un numero: ");
var I = 0;
while (Nro != 0) {
    if (I <= Nro)
        I = Nro;
    Nro = rls.questionInt("Ingrese un numero: ");
}
console.log("El numero mayor es: " + I);
