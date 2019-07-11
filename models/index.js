const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Pokedex', { useNewUrlParser: true });

module.exports = {
	Pokemon: require('./Pokemon'),
	Trainer: require('./Trainer'),
	Badge: require('./Badge')
	// Gym: require('./Gym')
};
