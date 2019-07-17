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

const typeComponent = types => {
	return types
		.map(type => {
			return `<p class="type ${type.toLowerCase()}">${type}</p>`;
		})
		.join('');
};

const pokemonComponent = pokemon => {
	const types = typeComponent(pokemon.type);
	return `
					<div class="card">
					<a href="/pokemon?name=${pokemon.name}">
						<div class="img-container">
						<img src="${pokemon.image}" class="card-img" alt="${pokemon.name}">
						</div>
						<div class="card-body">
						<div class="card-header">
							${pokemon.name}
						</div>
							<div class="types">
							${types}
							</div>
              <p class="card-text"> #${pokemon.pokedex}</p>
						</div>
						</a>
					</div>`;
};

const updateState = response => {
	state.pokemon = response.data;
	render();
};

const render = () => {
	const { pokemon } = state;
	$pokedex.empty();
	pokemon.forEach(entry => {
		const card = pokemonComponent(entry);
		$pokedex.append(card);
	});
};

const getAllPokemon = () => {
	$.ajax({
		url: BASE_URL,
		method: 'GET',
		success: updateState,
		error: (e1, e2, e3) => console.log(e2)
	});
};

getAllPokemon();
