// Modules
const express = require('express');

// Instanced Modules
const app = express();
const db = require('./models');

// Glabal Variables
const PORT = 3000;

// Middleware
app.use(express.static(`${__dirname}/public`));

// Routes

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

// return all pokemon as json endpoint
app.get('/api/pokemon', (req, res) => {
	db.Pokemon.find({}, (error, foundPokemons) => {
		if (error) return console.log(error);
		res.json(foundPokemons);
	});
});

// return a specific pokemon by name
app.get('/api/pokemon/:name', (req, res) => {
	db.Pokemon.findOne({ name: req.params.name }, (error, foundPokemon) => {
		if (error) return console.log(error);
		res.json(foundPokemon);
	});
});

// Server Listener
app.listen(PORT, () => {
	console.log('Welcome Professor Oak.');
});
