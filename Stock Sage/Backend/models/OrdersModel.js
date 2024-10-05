const {model} = require('mongoose');
const {OrdersSchema} = require('../schemas/OrdersSchema.js')

const OrdersModel =  model("order",OrdersSchema);
module.exports = {OrdersModel};