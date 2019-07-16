const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models');

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

module.exports = router.get('/', (req, res) => {
	db.Trainer.find({})
		.populate('pokemon')
		.exec((error, foundTrainers) => {
			if (error) return sendErrorResponse(res, error);
			sendResponse(res, foundTrainers);
		});
});
