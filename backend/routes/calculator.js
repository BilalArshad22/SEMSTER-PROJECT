// routes/calculator.js
const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.post('/save', calculatorController.saveSelection);

module.exports = router; // Ensure the router is properly exported
