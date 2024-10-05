import "./Summary.css"
import { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export default function Summary() {
    const data = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
    ];
    const [currentFunds, setCurrentFunds] = useState(0);
    const [holdings, setHoldings] = useState([])

    useEffect(() => {
        setInterval(() => {
            async function getCurrentFunds() {
                let funds = await axios.get("http://localhost:8080/getFunds");
                setCurrentFunds(funds.data.fundsAvilable);
            }
            async function getData() {
                let response = await axios.get("http://localhost:8080/allHoldings")
                setHoldings(response.data);
            }
            getData()
            getCurrentFunds();
        }, 4000)
    }, [])




    let totalProfit = holdings.reduce((netTotal, currVaue, curIndex) => {
        return Math.floor(netTotal + (currVaue.price * currVaue.qty));
    }, 0) - holdings.reduce((netTotal, currVaue, curIndex) => {
        return Math.floor(netTotal + (currVaue.avg * currVaue.qty));
    }, 0);


    let investment = holdings.reduce((netTotal, currVaue, curIndex) => {
        return Math.floor(netTotal + (currVaue.avg * currVaue.qty));
    }, 0).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    let currentValue = holdings.reduce((netTotal, currVaue, curIndex) => {
        return Math.floor(netTotal + (currVaue.price * currVaue.qty));
    }, 0).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })


    return (
        <div className="container mt-5 ms-3 mb-3 text-muted ">
            <div className="header mt-5 pb-3">
                <h4 className='mb-4'>Welcome To kite</h4>
                <hr />
            </div>

            <div className="equity mb-5">
                <h4 className='mb-2'>Equity</h4>
                <div className="holdingSummary d-flex">
                    <div className="avilableMargin p-5  d-flex flex-column align-items-center justify-content-center border-end">
                        <h2 className={currentFunds > 0 ? "green" : currentFunds < 0 ? "red" : ""}>{currentFunds.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</h2>
                        <p className='mt-1'>Margin Avilable</p>
                    </div>
                    <div className="MarginSummary ms-5 d-flex flex-column align-items-center justify-content-center">
                        <p>
                            Margin Used : 0
                        </p>
                        <p className={currentFunds > 0 ? "green" : currentFunds < 0 ? "red" : ""}>
                            Opening Balance : {currentFunds.toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </p>
                    </div>
                </div>
                <hr />
            </div>

            <div className="holdings mt-5">
                <h4 className='mt-4 mb-2'>Holdings(13)</h4>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                <div className="data d-flex">
                    <div className="first p-5 border-end">
                        <h3 className={totalProfit > 0 ? "green" : totalProfit < 0 ? "red" : ""}>
                            {totalProfit.toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </h3>
                        <p>P&L</p>
                    </div>
                    <hr />

                    <div className="second m-5">
                        <p>
                            Current Value <br />
                            <span>{
                                currentValue
                            }</span>{"k"}
                        </p>
                        <p>
                            Investment <br />
                            <span>{
                                investment
                            }</span>{"k"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}