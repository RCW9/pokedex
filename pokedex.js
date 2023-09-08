const fetchPokemon = require('./api.js')


class Pokedex {
    constructor(){
        this.dex = [];
    }

    catch(pokemon){
        return fetchPokemon(pokemon)
        .then((pokemonObj) => this.dex.push(pokemonObj))
       
    }

    all(){
        return this.dex
    }

}

module.exports = Pokedex

const pokedex = new Pokedex()
pokedex.catch('pikachu')
.then(() => pokedex.catch('snorlax'))
.then(() => {
    console.log(pokedex.all());
  });