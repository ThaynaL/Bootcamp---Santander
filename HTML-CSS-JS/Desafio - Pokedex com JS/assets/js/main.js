const pokemonList = document.getElementById('pokemonList');
const nextPageButton = document.getElementById('nextPageButton');

const maxOffset = 1008;
const limit = 6;
let offset = 905;

function idForm(pokemon) {
    const paddedId = String(pokemon.idPoke).padStart(4, '0');
    return `#${paddedId}`;
}

function loadPokemons(offset, limit) {
    pokeapi.getPokemon(offset,limit).then((pokemons = []) => {      
        const htmlList = pokemons.map((pokemon) =>
            `<li class="poke ${pokemon.type}">
                <span class="number">${idForm(pokemon)}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`       
        ).join('');
        pokemonList.innerHTML += htmlList;
    });
}

loadPokemons(offset, limit);

nextPageButton.addEventListener('click', () => {
    offset += limit;
    const qtdOffset = offset + limit;

    if(qtdOffset >= maxOffset){
        nextPageButton.parentElement.removeChild(nextPageButton)
        const newLimit = maxOffset - offset;
        loadPokemons(offset, newLimit);
    }else{
        loadPokemons(offset, limit);
    }    
});
