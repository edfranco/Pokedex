const db = require('../models');
const response = require('./response');

module.exports = {
    index: (req, res) => {
        db.Trainer.find({}, (error, foundTrainers) => {
            if (error) return response.sendErrorResponse(res, error);
            response.sendResponse(res, foundTrainers);
        });
    },
    show: (req, res) => {
        db.Trainer.findOne({ name: req.params.name }, (error, foundTrainer) => {
            if (error) return response.sendErrorResponse(res, error);
            response.sendResponse(res, foundTrainer);
        });
    }
}