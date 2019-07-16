const express = require('express');
const router = express.Router();
const path = require('path');

// Middleware
router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/pokemon/:name', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/show.html'));
	// res.sendFile(`${__dirname}/../views/show.html`);
});

module.exports = router;
