console.log(`Gotta catch'em all!`);

// -------------------------------- CONSTANT VARIABLES ------------------------------- //

const BASE_URL = '/api/pokemon';

// -------------------------------- GLOBAL VARIABLES ------------------------------- //

// -------------------------------- STATE VARIABLES ------------------------------- //

const state = {
	pokemon: []
};

// -------------------------------- DOM ELEMENTS ------------------------------- //

const $pokedex = $('#pokedex');

// -------------------------------- FUNCTIONS ------------------------------- //

const pokemonComponent = pokemon => {
	return `<div class="card" style="width: 18rem;">
            <img src="${pokemon.image}" class="card-img-top" alt="${
		pokemon.name
	}">
            <div class="card-body">
              <p class="card-text">${pokemon.description}</p>
            </div>
          </div>`;
};

const render = response => {
	const { data } = response;
	$pokedex.empty();
	data.forEach(pokemon => {
		const card = pokemonComponent(pokemon);
		$pokedex.append(card);
	});
};

const getAllPokemon = () => {
	$.ajax({
		url: BASE_URL,
		method: 'GET',
		success: render,
		error: (e1, e2, e3) => console.log(e2)
	});
};

getAllPokemon();
