require('dotenv').config();
const { HoldingsModel } = require('../models/HoldingsModel.js');
const {HoldingsData} = require('../init/HoldingsData.js');
const {PositionsData} = require("../init/PositionsData.js");
const {PositionModel} = require('../models/PositionsModel.js');
const {WatchListData} = require('../init/WatchListData.js');
const {WatchlistModel} = require('../models/WatchlistModel.js');
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);


async function resetData(){
    await mongoose.connect(mongoUrl);
    await WatchlistModel.deleteMany();
    WatchListData.forEach(async(stock)=>{
        let newData = new WatchlistModel(stock);
        let result = await newData.save();
        console.log(result);
    })

    await PositionModel.deleteMany();
    PositionsData.forEach(async(stock)=>{
        let newData = new PositionModel(stock);
        let res = await newData.save();
        console.log(res);
    })
    
    await HoldingsModel.deleteMany();
    HoldingsData.forEach(async (currItem) => {
        let newHolding = new HoldingsModel({
            name: currItem.name,
            qty: currItem.qty,
            avg: currItem.avg,
            price: currItem.price,
            net: currItem.net,
            day: currItem.day
        });
        console.log(newHolding);
        await newHolding.save();
    })
}

// resetData();