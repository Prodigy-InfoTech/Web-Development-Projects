const {Schema} = require('mongoose');

const WatchlistSchema = new Schema({
    stockName: String
})

module.exports = {WatchlistSchema};