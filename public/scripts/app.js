console.log(`Gotta catch'em all!`);

//NOTE Constant Variables

const BASE_URL = '/api/pokemon';

//NOTE Global Variables


//NOTE State Variable

const state = {
    pokemon: [],
    filtered: []

};
//NOTE DOM Elements
const $pokedex = $('#pokedex');
const $searchbar = $(`#search-pokemon`);



//NOTE Functions
const typeComponent = types => {
    return types.map(type => `<p class="type ${type.toLowerCase()}">${type}</p>`).join(' ');
}

const pokemonComponent = pokemon => {
    const types = typeComponent(pokemon.type)
    return `
    <div class="card">
        <div class="img-container">
            <img class="card-img" src="${pokemon.image}" height:"100" width="100" alt="picture of ${pokemon.name}"/>
        </div>  
        
        <div class="card-body">
            <div class="card-header">
                ${pokemon.name}
            </div>

            <div class="types"</div>
                ${types}
            </div>
            <div class="card-text">
                <p>${pokemon.pokedex}</p>
            </div>
        </div>
    </div>
    `
}

const render = () => {
    const { pokemon, filtered } = state;
    $pokedex.empty();
    if (filtered.length > 0) {
        filtered.forEach(pokemon => {
            const card = pokemonComponent(pokemon);
            $pokedex.append(card)
        })
    } else {
        pokemon.forEach(pokemon => {
            const card = pokemonComponent(pokemon);
            $pokedex.append(card)
        })
    }

}

const updateState = response => {
    const { data } = response;
    state.pokemon = data;
    render();
}

const getAllPokemon = () => {
    $.ajax({
        url: BASE_URL,
        method: 'GET',
        success: updateState,
        error: (error1, error2, error3) => console.log(error2)
    })
}

getAllPokemon();

const filterPokemon = event => {
    const filteredPokemon = state.pokemon.filter(pokemon => {
        return pokemon.pokedex.toString() === event.target.value || pokemon.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    state.filtered = filteredPokemon;
    render();
}

//NOTE Event Listeners
$searchbar.keyup(filterPokemon);
