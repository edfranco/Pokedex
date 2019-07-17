console.log(`Gotta catch'em all!`);

// -------------------------------- CONSTANT VARIABLES ------------------------------- //
const name = new URL(location.href).searchParams.get('name');

const BASE_URL = `/api/pokemon/${name}`;
console.log(BASE_URL);
// -------------------------------- GLOBAL VARIABLES ------------------------------- //

// -------------------------------- STATE VARIABLES ------------------------------- //

const state = {
	pokemon: null
};

// -------------------------------- DOM ELEMENTS ------------------------------- //

const $pokemon = $('#pokemon');

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
	console.log(state.pokemon);
	render();
};

const render = () => {
	const { pokemon } = state;
	$pokemon.empty();
	const card = pokemonComponent(pokemon);
	$pokemon.append(card);
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
