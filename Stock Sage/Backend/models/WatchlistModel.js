const {model} = require('mongoose');
const {WatchlistSchema} = require('../schemas/WatchlistSchema.js')

const WatchlistModel =  model("watchlist",WatchlistSchema);
module.exports = {WatchlistModel};