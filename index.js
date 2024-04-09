console.log("Terminal app is running");

console.log("Bye bye, terminal app finished");

const pokemon = require('pokemon');

let randomPokemon = pokemon.random();
let pokemonID = pokemon.getId(randomPokemon);

console.log(`The pokedex ID for ${randomPokemon} is ${pokemonID}`);