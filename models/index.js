const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Pokedex', { useNewUrlParser: true });

module.exports = {
	Pokemon: require('./Pokemon')
	// Gym: require('./Gym')
};
