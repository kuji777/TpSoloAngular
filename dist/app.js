"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var pikachu = new Pokemon_1.Pokemon('pikachu', 5);
var bulbizarre = new Pokemon_1.Pokemon('bulbizarre', 1);
if (pikachu.isFasterThan(bulbizarre)) {
    console.log(pikachu.getName() + " goes first");
}
else {
    console.log(bulbizarre.getName() + " goes first");
}
