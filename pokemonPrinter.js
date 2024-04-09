
function pokemonPrinter(){
    const pokemon = require('pokemon');

    let randomPokemon = pokemon.random();
    let pokemonID = pokemon.getId(randomPokemon);

    console.log(`The pokedex ID for ${randomPokemon} is ${pokemonID}`);
}

module.exports = {
    pokemonPrinter
}