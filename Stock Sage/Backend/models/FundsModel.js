const {model} = require('mongoose');
const {FundsSchema} = require('../schemas/FundsSchema.js')

const fundsModel =  model("fund",FundsSchema);
module.exports = {fundsModel};