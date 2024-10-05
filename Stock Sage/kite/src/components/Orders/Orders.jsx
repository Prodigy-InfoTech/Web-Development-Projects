import "./Orders.css"
import axios from 'axios';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Orders() {

    let index = 1;
    let [placedOrders, setPlacedOrders] = useState([])

    useEffect(() => {
        async function getData() {
            let response = await axios.get("http://localhost:8080/allOrders")
            setPlacedOrders(response.data);
        }
        getData()
    })


    return (
        <div className="orders m-5">
            
            <div className="no-orders d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-muted">Orders</h2>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order No</th>
                            <th scope="col">Type</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Avg</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Brokerage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            placedOrders.map((currElement) => (
                                <tr key={uuidv4()}>
                                    <td key={uuidv4()} className={currElement.orderType == "BUY" ? "green" : "red"} >{index++}</td>
                                    <td key={uuidv4()} className={currElement.orderType == "BUY" ? "green" : "red"} >{currElement.orderType}</td>
                                    <td key={uuidv4()} className={currElement.orderType == "BUY" ? "greeb" : "red"}>{currElement.stockName}</td>
                                    <td key={uuidv4()}>{currElement.AveragePrice.toLocaleString('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</td>
                                    <td key={uuidv4()}>{currElement.qty}</td>
                                    <td key={uuidv4()}>{Number(20).toLocaleString('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                --------
            </div>
        </div>
    )
}