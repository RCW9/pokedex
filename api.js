
function fetchPokemon(pokemon){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then ((data) => {
        const alltypes = data.types.map((type) => type.type.name);
        return {
            name: data.forms[0].name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            types: alltypes


        }
    })
}

module.exports = fetchPokemon



