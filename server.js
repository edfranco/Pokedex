// Modules
const express = require('express');

// Instanced Modules
const app = express();
const db = require('./models');
const routes = require('./routes');

// Glabal Variables
const PORT = 3000;

//Routes

//NOTE    Views Endpoints
app.use('/', routes.views);

//NOTE  Pokemon Endpoints
app.use('/api/pokemon', routes.pokemon);

//NOTE   Trainer Enspoints
app.use('/api/trainers', routes.trainers);

// Server Listener
app.listen(PORT, () => {
	console.log('Welcome Professor Oak.');
});
