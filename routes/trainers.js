const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

router.get('/', ctrls.trainerCtrl.index);

router.get('/:name', ctrls.trainerCtrl.show);

module.exports = router;