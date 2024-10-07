const { Schema } = require('mongoose');

const OrdersSchema = new Schema({
    orderType: String,
    stockName: String,
    AveragePrice: Number,
    qty: Number
})

module.exports = { OrdersSchema };