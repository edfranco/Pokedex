const db = require('./models');

const pokemonList = [
	{
		name: 'Bulbasaur',
		type: 'Grass',
		power: 20,
		health: 24,
		image:
			'https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png'
	},
	{
		name: 'Squirtle',
		type: 'Water',
		power: 27,
		health: 15,
		image:
			'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjcvKy-iKvjAhXiCTQIHQUdCKwQjRx6BAgBEAU&url=https%3A%2F%2Fpokemontowerdefensethree.fandom.com%2Fwiki%2FSquirtle&psig=AOvVaw06LWOkKok5MdKl8wlWbeS2&ust=1562872653097664'
	}
];

//-- CREATE --//
// .create('object template', function('error','object returned from db'))
// db.Pokemon.create(bulbasaur, (error, createdPokemon) => {
// 	if (error) return console.log(error);
// 	console.log(createdPokemon);
// });

pokemonList.forEach(pokemon => {
	db.Pokemon.create(pokemon, (error, createdPokemon) => {
		if (error) return console.log(error);
		console.log(createdPokemon);
	});
});

//-- READ --//
// .find('what we are searching for', function('error','array of db objects that it found'))
// .findOne() returns one object
db.Pokemon.find({}, (error, foundPokemons) => {
	if (error) return console.log(error);
	console.log(foundPokemons);
});

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
