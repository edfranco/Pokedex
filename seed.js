const db = require('./models');

const pokemonList = require('./pokemon.json');

//-- CREATE --//
// .create('object template', function('error','object returned from db'))
// db.Pokemon.create(bulbasaur, (error, createdPokemon) => {
// 	if (error) return console.log(error);
// 	console.log(createdPokemon);
// });

// pokemonList.forEach(pokemon => {
// 	db.Pokemon.create(pokemon, (error, createdPokemon) => {
// 		if (error) return console.log(error);
// 		console.log(createdPokemon);
// 	});
// });

//-- READ --//
// .find('what we are searching for', function('error','array of db objects that it found'))
// .findOne() returns one object
// db.Pokemon.find({}, (error, foundPokemons) => {
// 	if (error) return console.log(error);
// 	console.log(foundPokemons);
// });

//-- UPDATE --//
// .findOneAndUpdate('what we are searching for', 'updatedinfo',{new:true},function('error', 'updatedObject'))

const updatedBulba = {
	health: 45
};

// db.Pokemon.findOneAndUpdate(
// 	{ name: 'Bulbasaur' },
// 	{
// 		health: 60
// 	},
// 	{ new: true },
// 	(error, updatedPokemon) => {
// 		if (error) return console.log(error);
// 		console.log(updatedPokemon);
// 	}
// );

//-- DESTROY --//

// .findOneAndDelete('What we are looking for', function('error','deletedPokemon'))
// db.Pokemon.findOneAndDelete({ name: 'Bulbasaur' }, (error, deletedPokemon) => {
// 	if (error) return console.log(error);
// 	console.log(deletedPokemon);
// });

// == TRAINER == //

const Ash = {
	name: 'Ash Ketchum',
	age: 57,
	hometown: 'Pallet Town',
	pokemon: []
};

// Create
// db.Trainer.create(Ash, (error, createdTrainer) => {
// 	if (error) return console.log(error);
// 	console.log(createdTrainer);
// });

// read
// db.Trainer.find({}, (error, foundTrainer) => {
// 	if (error) return console.log(error);
// 	console.log(foundTrainer);
// });

// Update

// const newAsh = {
// 	pokemon: ['Bulbasaur', 'Squirtle']
// };

// const updateTrainer = () => {
// 	const ids = [];
// 	newAsh.pokemon.forEach(name => {
// 		db.Pokemon.findOne({ name }, (error, foundPokemon) => {
// 			if (error) return console.log(error);
// 			ids.push(foundPokemon._id);
// 			db.Trainer.findOneAndUpdate(
// 				{ name: 'Ash Ketchum' },
// 				{ pokemon: ids },
// 				{ new: true },
// 				(error, updatedTrainer) => {
// 					if (error) return console.log(error);
// 					console.log(updatedTrainer);
// 				}
// 			);
// 		});
// 	});
// };

// updateTrainer();

// Create and Embed Badge
const badge = {
	name: 'rainbow badge',
	town: 'Celadon City',
	color: 'All',
	gym: 'Celadon City Gym'
};

// db.Badge.create(badge, (error, createdBadge) => {
// 	if (error) return console.log(error);
// 	db.Trainer.findOneAndUpdate(
// 		{ name: 'Ash Ketchum' },
// 		{ badges: [createdBadge] },
// 		{ new: true },
// 		(error, updatedTrainer) => {
// 			if (error) return console.log(error);
// 			console.log(updatedTrainer);
// 		}
// 	);
// });
