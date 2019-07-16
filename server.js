// Modules
const express = require('express');

// Instanced Modules
const app = express();
const db = require('./models');

// Glabal Variables
const PORT = 3000;

// Middleware
app.use(express.static(`${__dirname}/public`));

// reponse functions
const getTime = () => {
	return new Date().toLocaleString();
};

const sendResponse = (res, data) => {
	res.status(200).json({
		status: 201,
		requestedAt: getTime(),
		data: data
	});
};

const sendErrorResponse = (res, error) => {
	console.log({ error });
	res.status(400).json({
		status: 400,
		message: 'Something went wrong, please try again'
	});
};

// Routes

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

// return all pokemon as json endpoint
app.get('/api/pokemon', (req, res) => {
	db.Pokemon.find({}, (error, foundPokemons) => {
		if (error) return sendErrorResponse(res, error);
		sendResponse(res, foundPokemons);
	});
});

// return a specific pokemon by name
app.get('/api/pokemon/:name', (req, res) => {
	db.Pokemon.findOne({ name: req.params.name }, (error, foundPokemon) => {
		if (error) return sendErrorResponse(res, error);
		sendResponse(res, foundPokemon);
	});
});

// returns all trainers
app.get('/api/trainers', (req, res) => {
	db.Trainer.find({})
		.populate('pokemon')
		.exec((error, foundTrainers) => {
			if (error) return sendErrorResponse(res, error);
			sendResponse(res, foundTrainers);
		});
});

// Server Listener
app.listen(PORT, () => {
	console.log('Welcome Professor Oak.');
});
