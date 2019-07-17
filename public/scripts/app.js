console.log(`Gotta catch'em all!`);

// -------------------------------- CONSTANT VARIABLES ------------------------------- //

const BASE_URL = '/api/pokemon';

// -------------------------------- GLOBAL VARIABLES ------------------------------- //

// -------------------------------- STATE VARIABLES ------------------------------- //

const state = {
	pokemon: [],
	filtered: []
};

// -------------------------------- DOM ELEMENTS ------------------------------- //

const $pokedex = $('#pokedex');

const $searchbar = $('#search-pokemon');

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
	const { pokemon, filtered } = state;
	$pokedex.empty();
	if (filtered.length > 0) {
		filtered.forEach(entry => {
			const card = pokemonComponent(entry);
			$pokedex.append(card);
		});
	} else {
		pokemon.forEach(entry => {
			const card = pokemonComponent(entry);
			$pokedex.append(card);
		});
	}
};

const getAllPokemon = () => {
	$.ajax({
		url: BASE_URL,
		method: 'GET',
		success: updateState,
		error: (e1, e2, e3) => console.log(e2)
	});
};

const filterPokemon = event => {
	console.log(event.target.value);
	const filteredPokemon = state.pokemon.filter(pokemon => {
		return (
			pokemon.name.includes(event.target.value) ||
			pokemon.pokedex.toString() === event.target.value
		);
	});
	state.filtered = filteredPokemon;
	render();
};

getAllPokemon();

// -------------------------------- EVENT LISTENERS ------------------------------- //

$searchbar.keyup(filterPokemon);
