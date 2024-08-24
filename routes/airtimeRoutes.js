const express = require('express');
const router = express.Router();
const airtimeController = require('../controllers/airtimeController');  

router.post('/send-airtime', airtimeController.sendAirtime);

module.exports = router;
