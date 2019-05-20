"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    Pokemon.prototype.isFasterThan = function (enemyPoke) {
        return this.speed > enemyPoke.getSpeed();
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
