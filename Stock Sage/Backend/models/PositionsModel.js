const {model} = require('mongoose');
const {PositionsSchema} = require('../schemas/PositionsSchema.js');

const PositionModel = model("Position",PositionsSchema);

module.exports = {PositionModel};