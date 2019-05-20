import {Pokemon} from "./Pokemon"

let pikachu = new Pokemon('pikachu',5);
let bulbizarre = new Pokemon('bulbizarre',1);

if(pikachu.isFasterThan(bulbizarre)){
    console.log(pikachu.getName()+" goes first")
}else{
    console.log(bulbizarre.getName()+" goes first")
}
