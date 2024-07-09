// models/Selection.js
const mongoose = require('mongoose');

const selectionSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Selection', selectionSchema);
