import Button from '@mui/material/Button';
import PieChartIcon from '@mui/icons-material/PieChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import AddFundsBtn from './AddFundsBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Funds() {

    const [currentFunds,setCurrentFunds] = useState(0);
    useEffect(()=>{
        async function getCurrentFunds() {
            let funds =  await axios.get("http://localhost:8080/getFunds");
            setCurrentFunds(funds.data.fundsAvilable);
        }
        getCurrentFunds();
    },[])


    return (
        <>
            <div className="container p-4">
                <div className="addWithdrawButtons d-flex align-items-center justify-content-center mt-3">
                    <AddFundsBtn setCurrentFunds={setCurrentFunds}/>
                </div>

                <div className="equity d-flex m-5 align-items-center justify-content-around">
                    <div className="headings">
                        <h4 className='text-muted'> <PieChartIcon /> Equity</h4>
                    </div>
                    <div className="statement">
                        <a href='#' style={{ "textDecoration": "none" }}> <TripOriginIcon /> View Statement <ArrowForwardIcon /> </a>
                    </div>
                </div>

                <div className="detail mt-3 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <p>Avilable margin : </p>
                        <p>Used margin : </p>
                        <p>Avilable Cash : </p>
                        <hr />
                        <p>Opening  Balance : </p>
                        <p>Pay in  : </p>
                        <p>Pay  Out : </p>
                        <p>Span : </p>
                        <p>Delivery Margin : </p>
                        <p>Exposure : </p>
                        <p>Options Premium : </p>
                        <hr />
                    </div>
                    <div className="col-mf-6">
                        <p>{currentFunds.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <hr />
                        <p>{currentFunds.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>{Number(0.0).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>

                        <hr />
                    </div>
                </div>
            </div>

        </>
    )
}