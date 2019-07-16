const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = router
	.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../views/index.html'));
	})
	.get('/pokemon/:name', (req, res) => {
		res.sendFile(path.join(__dirname, '../views/show.html'));
	});
