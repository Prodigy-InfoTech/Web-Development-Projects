import { useEffect, useState } from "react"
import "./WatchListComponent.css"
import WatchListPrice from "./WatchListPrice";
import WatchListActions from "./WatchListActions";
import {getLtp}  from "../../../utils/GetLtp.js";
import axios from 'axios';


export default function WatchListComponent({ stock,setWatch }) {

    const [stockData,setStockData] = useState({});

    //Update stock LTP Continiously
    useEffect(()=>{
        setInterval(()=>{
            async function updateHoldings() {
                let responses = await axios.get("http://localhost:8080/allHoldings")
                responses = responses.data;
                if(responses){
                    for(let response of responses){
                        let newData = getLtp(response.name);
                        await axios.post("http://localhost:8080/updateHoldings",{
                            "name":response.name,
                            "price":newData.randomNumber,
                            "net":String(newData.percentageDifference+"%")
                        })
                    }
                }                
            }
            updateHoldings();
            if(stock.stockName){
                setStockData(getLtp(stock.stockName));
            }
            
            
        },2500)
    },[])

    
    let [showWatchlistActions, setShowWatchlistActions] = useState(false);
    let handleMouseEnter = (e) => {
        setShowWatchlistActions(true);  
    }
    let handleMouseExit = (e) => {
        setShowWatchlistActions(false);
    }
    return (
        <div className="container-fluid mt-3" onMouseOver={handleMouseEnter} onMouseOut={handleMouseExit}>
            <div className="d-flex align-items-center justify-content-between" >
                <div className={stockData.isDown ? "red" : "green"}>{stockData.stockSymbol}</div>
                {
                    showWatchlistActions ?  (<WatchListActions stock={stockData} setWatch={setWatch} setFalse={handleMouseExit}/>) : (<WatchListPrice stock={stockData} />)
                }
            </div>
        </div>
    )
}