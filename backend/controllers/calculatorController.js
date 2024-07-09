// controllers/calculatorController.js
const Selection = require('../models/Selection');

exports.saveSelection = async (req, res) => {
    const { plan, features } = req.body;
    console.log("in here")

    try {
        const newSelection = new Selection({ plan, features });
        await newSelection.save();
        console.log("hello ");
        res.status(201).json({ message: 'Selection saved successfully for bilal' });
    } catch (err) {
        res.status(400).json({ message: 'Error saving selection', error: err });
    }
};
