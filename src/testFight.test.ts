import { Pokemon } from './Pokemon';

let pikachu = new Pokemon('pikachu',5,5,1);
let bulbizarre = new Pokemon('bulbizarre',1,5,2);
let mew = new Pokemon('mew',451,482,2);

test('pikachu should be faster than bulbizarre', () => {
  expect(pikachu.isFasterThan(bulbizarre)).toBe(true);
});

test('mew should be faster than pikachu', () => {
    expect(mew.isFasterThan(pikachu)).toBe(true);
  });

test('bulbizarre shouldn\'t be faster than pikachu', () => {
  expect(bulbizarre.isFasterThan(pikachu)).toBe(false);
});

test('bulbizarre attack pikachu with 2 damages, pikachu\'s hp should be 3', () => {
    expect(bulbizarre.attack(pikachu)).toBe(3);
});

test('pikachu attack bulbizarre with 2 damages, bulbizarre\'s hp should be 3', () => {
    expect(bulbizarre.getHurtBy(pikachu)).toBe(4);
});

test('pikachu should win the fight over bulbizarre', () => {
    expect(bulbizarre.startsFightWith(pikachu)).toBe(pikachu);
});

pikachu = new Pokemon('pikachu',5,5,1);
mew = new Pokemon('mew',451,482,485);

test('mew should win the fight over pikachu', () => {
    expect(mew.startsFightWith(pikachu)).toBe(mew);
});