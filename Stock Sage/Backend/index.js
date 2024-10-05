require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { HoldingsModel } = require('./models/HoldingsModel.js');
const {HoldingsData} = require('./init/HoldingsData.js');
const {PositionsData} = require("./init/PositionsData.js");
const {PositionModel} = require('./models/PositionsModel.js');
const {WatchListData} = require('./init/WatchListData.js');
const {WatchlistModel} = require('./models/WatchlistModel.js');
const {OrdersModel} = require('./models/OrdersModel.js')

const bodyParser  = require('body-parser')
const cors = require('cors');
const {fundsModel} = require('./models/FundsModel.js');

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

app.use(cors());
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());


const port = process.env.PORT || 8080;


mongoose.connect("mongodb://127.0.0.1:27017/kite");
// app.use("/", authRoute);

app.get("/addWatchList",async(req,res)=>{
    await WatchlistModel.deleteMany();
    WatchListData.forEach(async(stock)=>{
        let newData = new WatchlistModel(stock);
        let result = await newData.save();
        console.log(result);
    })
    res.send("Data Added Successfully");
})

app.get("/addPositions",async(req,res)=>{
    await PositionModel.deleteMany();
    PositionsData.forEach(async(stock)=>{
        let newData = new PositionModel(stock);
        let res = await newData.save();
        console.log(res);
    })
    res.send("Data Added Successfully");
})


app.get("/addHoldings", async (req, res) => {
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
    res.send("Data Inserted successfully")
})


app.get("/addOrders",async(req,res)=>{
    let deleteResult = await OrdersModel.deleteMany();
    let placedOrders = [
        {
            orderType: "BUY",
            stockName: "INFY",
            AveragePrice: 20,
            qty: 10,
        },
        {
            orderType: "SELL",
            stockName: "INFY",
            AveragePrice: 20,
            qty: 10
        }
    ]

   let insertResult =  await OrdersModel.insertMany(placedOrders);
   console.log(insertResult);
    res.send("Working properly")
})

app.post("/addWatchList",async(req,res)=>{
    let data = req.body;
    for(let i = 0; i < data.length; i++){
        let watchListStock = new WatchlistModel({"stockName":data[i].stockSymbol})
        let result = await watchListStock.save();
        console.log(result);
    }
    res.send("Data Inserted Successfully");
})





// WORKING ROUTES
app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions",async(req,res)=>{
    let allPositions = await PositionModel.find({});
    res.json(allPositions);

})


app.get("/allOrders",async(req,res)=>{
   let fetechResult = await OrdersModel.find();
    res.send(fetechResult);
})

app.post("/placeBuyOrder",async(req,res)=>{
    let data = new OrdersModel(req.body);
    let saveResult = await data.save();

    //Insert into Holdings
    let holdingsStock = await HoldingsModel.findOne({"name":req.body.stockName});
    if(holdingsStock)
    {
        let deleteResult = await HoldingsModel.deleteOne({"name":req.body.stockName});
        console.log
        let newData =  new HoldingsModel({
            name:holdingsStock.name,
            price:req.body.AveragePrice,
            qty: Number(Number(holdingsStock.qty) + Number(req.body.qty)),
            avg: req.body.AveragePrice,
            net:"+0.58%",
            day:"+0.11%"
        });
        await newData.save();
    }
    else
    {
        let newData =  new HoldingsModel({
            name:req.body.stockName,
            price:req.body.AveragePrice,
            qty: req.body.qty, // Ensure this.qty and req.body.qty are numbers
            avg: req.body.AveragePrice,
            net:"+0.58%",
            day:"+0.11%"
        });
        await newData.save();
    }

    //Update Funds
    let currFunds = await fundsModel.find({});
    currFunds = Number(currFunds[0].fundsAvilable);
    let newFunds = Math.floor(currFunds - (req.body.qty * req.body.AveragePrice));
    let deleteFunds = await fundsModel.deleteMany({});
    let addNewFunds = new fundsModel({"fundsAvilable":newFunds});
    await addNewFunds.save();
    res.send(saveResult);
})

app.get("/getFunds",async(req,res)=>{
    let currentFunds = await fundsModel.findOne({});
    res.send(currentFunds);
})

app.post("/addFunds",async(req,res)=>{
    let fundsToadd = req.body.funds;
    fundsToadd = Number(fundsToadd)
    let currentFunds = await fundsModel.findOne({});
    if(currentFunds){   
        currentFunds = Number(currentFunds.fundsAvilable);
        currentFunds += fundsToadd;
        let deleteResult = await fundsModel.deleteMany({});
        let insertData = new fundsModel({fundsAvilable:currentFunds});
        await insertData.save();
    }else{
        let deleteResult = await fundsModel.deleteMany({});
        let insertData = new fundsModel({fundsAvilable:fundsToadd});
        let insertResult = await insertData.save();
    }
    res.send("Successfully Added Funds");
})


app.get("/getWatchlist",async(req,res)=>{
    let result = await WatchlistModel.find({});
    res.send(result);
})

app.post("/updateHoldings",async(req,res)=>{
    let data = req.body;
    let stockDocument = await HoldingsModel.findOneAndUpdate({"name":data.name},{$set:{"price":data.price,"net":data.net}});
    res.send("Holdings Updated Successfully");
})


app.post("/addNewWatchListStock",async(req,res)=>{
     let newStockSymbol = req.body;
     console.log(newStockSymbol);
     let newWacthListStock = new WatchlistModel(newStockSymbol);
     let result = await newWacthListStock.save();
     res.send(result);
})

app.post("/deleteStock",async(req,res)=>{
    let deleteStock = req.body;
    let deleteResult = await WatchlistModel.findOneAndDelete(deleteStock);
    console.log(deleteResult);
    res.send(deleteResult);
})

app.post("/getAvilableQty",async(req,res)=>{
    let stockName = req.body;
    let data = await HoldingsModel.findOne({"name":req.body.name});
    res.send(data);
})

app.post("/placeSellOrder",async(req,res)=>{
    let data = new OrdersModel(req.body);
    let saveResult = await data.save();

    //Insert into Holdings
    let holdingsStock = await HoldingsModel.findOne({"name":req.body.stockName});
    if(holdingsStock)
    {
        let deleteResult = await HoldingsModel.deleteOne({"name":req.body.stockName});
        console.log
        let newData =  new HoldingsModel({
            name:holdingsStock.name,
            price:req.body.AveragePrice,
            qty: Number(Number(holdingsStock.qty) - Number(req.body.qty)),
            avg: req.body.AveragePrice,
            net:"+0.58%",
            day:"+0.11%"
        });
        await newData.save();
    }
    else
    {
        let newData =  new HoldingsModel({
            name:req.body.stockName,
            price:req.body.AveragePrice,
            qty: req.body.qty, // Ensure this.qty and req.body.qty are numbers
            avg: req.body.AveragePrice,
            net:"+0.58%",
            day:"+0.11%"
        });
        await newData.save();
    }

    //Update Funds
    let currFunds = await fundsModel.find({});
    currFunds = Number(currFunds[0].fundsAvilable);
    let newFunds = Math.floor(currFunds + (req.body.qty * req.body.AveragePrice));
    let deleteFunds = await fundsModel.deleteMany({});
    let addNewFunds = new fundsModel({"fundsAvilable":newFunds});
    await addNewFunds.save();
    res.send(saveResult);
})

app.listen(port, () => {
    console.log(`App Started on Server = ${port}`);
})