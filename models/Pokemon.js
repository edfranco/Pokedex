const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
	name: String,
	type: [String],
	power: Number,
	health: Number,
	image: String,
	pokedex: Number
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;
