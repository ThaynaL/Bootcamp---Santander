const pokeapi = {};

function convertPokeAPIDetailToPokemon(pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokemonDetail.name;
    pokemon.idPoke = pokemonDetail.id;
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokemonDetail.sprites.other['official-artwork'].front_default;
    return pokemon;
}

pokeapi.getPokemonDetail = (pokemon) => {
     return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonDetail) => convertPokeAPIDetailToPokemon(pokemonDetail));
}

pokeapi.getPokemon = (offset = 905, limit = 6) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error));
}
