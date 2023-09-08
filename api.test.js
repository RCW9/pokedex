const fetchPokemon = require('./api.js')

describe('fetchPokemon', () => {
    it('returns a promise with the correct Pikachu ID', (done) => {
        fetchPokemon('pikachu')
        .then((pokemon) => {
          expect(pokemon.id).toEqual(25); // Pikachu's ID is 25
            done()
        });
    });
});

describe('fetchPokemon', () => {
    it('returns a promise with the correct name', (done) => {
        fetchPokemon('snorlax')
        .then((pokemon) => {
          expect(pokemon.name).toBe('snorlax'); // Pikachu's ID is 25
            done()
        });
    });
});

describe('fetchPokemon', () => {
    it('returns a promise with the correct types', (done) => {
        fetchPokemon('eevee')
        .then((pokemon) => {
          expect(pokemon.types).toEqual(['normal']); // Pikachu's ID is 25
            done()
        });
    });
});