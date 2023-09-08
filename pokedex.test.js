
const Pokedex = require('./pokedex.js')

describe('Pokedex', () => {
    it('initiates with an empty array', () => {
        const pokedex = new Pokedex()
        expect(pokedex.dex).toEqual([])
    });
});

describe('Pokedex', () => {
    it('adds pokemon details to dex', (done) => {
        const pokedex = new Pokedex()
        pokedex.catch('pikachu')
        .then(() => pokedex.catch('snorlax'))
        .then(() => {
            expect(pokedex.all()).toEqual([
            {
                name: 'pikachu',
                id: 25,
                height: 4,
                weight: 60,
                types: [ 'electric' ]
            },
            {
                name: 'snorlax',
                id: 143,
                height: 21,
                weight: 4600,
                types: [ 'normal' ]
            }
          ]); // Pikachu's ID is 25
            done()
        });
    });
        
    });
