// Modules
const express = require('express');
// Instanced Modules
const app = express();
const routes = require('./routes');
// Global Variables
const PORT = 3000;
//Middleware
app.use(express.json())
// Routes
app.use('/', routes.views);
// return all pokemon endpoints
app.use('/api/pokemon', routes.pokemon);
app.use('/api/trainers', routes.trainers);
// Server Listener
app.listen(PORT, () => {
	console.log('Welcome Professor Oak.');
});
