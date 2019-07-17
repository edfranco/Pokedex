console.log(`Gotta catch'em all!`);

//NOTE Constant Variables

const BASE_URL = '/api/pokemon';

//NOTE Global Variables


//NOTE State Variable

const state = {
    pokemon: [],

};
//NOTE DOM Elements

const $pokedex = $('#pokedex');
console.log({ $pokedex, state });


//NOTE Functions
const pokemonComponent = pokemon => {
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

            <div class="card-text">
                <p>${pokemon.pokedex}</p>
            </div>
        </div>
    </div>
    `
}

const render = () => {
    const { pokemon } = state;
    pokemon.forEach(pokemon => {
        const card = pokemonComponent(pokemon);
        $pokedex.append(card)
    })
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

//NOTE Event Listeners
