const { model } = require('mongoose');
const { HoldingsSchema } = require('../schemas/HoldingSchema.js'); // Ensure the path is correct

const HoldingsModel = model("Holding", HoldingsSchema); // Use singular form for the model name

module.exports = { HoldingsModel };