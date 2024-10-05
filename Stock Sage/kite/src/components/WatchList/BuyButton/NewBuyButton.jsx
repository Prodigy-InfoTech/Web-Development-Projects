import React, { useState,useEffect } from 'react';
import { Button, Snackbar, Modal, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import axios from 'axios';

export default function NewBuyButton({ stock }) {

    const [qty, setQty] = useState()
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    let [message, setMessage] = useState("Place a valid Order");
    let [errorType, setErrorType] = useState('success')
    const [currentFunds,setCurrentFunds] = useState(0);

    async function executeBuyOrdder(stock){
        //Insert into order db
        let orderData = {
            orderType: "BUY",
            stockName: stock.stockSymbol,
            qty: qty,
            AveragePrice: stock.randomNumber
        }
        let postResult = await axios.post("http://localhost:8080/placeBuyOrder", orderData);
    }




    useEffect(()=>{
        async function getCurrentFunds() {
            let funds =  await axios.get("http://localhost:8080/getFunds");
            setCurrentFunds(funds.data.fundsAvilable);
        }
        getCurrentFunds();
    })


    let handleQty = (e) => {
        if (e.target.value >= 0 && e.target.value <= Math.floor(Number(currentFunds/stock.randomNumber))) {
            setQty(e.target.value)
        }
    }


    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleButtonClick = async () => {

        if (qty == 0) {
            setMessage("Enter a valid qunatity")
            setSnackbarOpen(true);
            handleModalClose();
            setErrorType("error")
        }
        else if (qty > 0 && qty <= Math.floor(Number(currentFunds/stock.randomNumber))) {
            executeBuyOrdder(stock);
            setMessage(`Order Executed Successfully. Bought ${stock.name} x ${qty}.`)
            setErrorType("success")
            setSnackbarOpen(true);
            handleModalClose();
            setQty(null);
        } else {
            setMessage("Enter a valid qunatity")
            setSnackbarOpen(true);
            handleModalClose();
            setErrorType("error")
            setQty(null);
        }

        // setSnackbarOpen(true);
        // handleModalClose(); // Optionally close the modal when the button is clicked
    };


    


    return (
        <div>

            <Button variant="contained" onClick={handleModalOpen}>
                B
            </Button>

            <Modal open={modalOpen} onClose={handleModalClose}>
                <Box sx={{ width: "500px", padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
                    <h2 className='text-center text-muted'>Buy {stock.stockSymbol}</h2>
                    <div className='d-flex'>
                        <TextField
                        type='number'
                        id="outlined-basic"
                        label="Quantity"
                        variant="outlined"
                        style={{ "margin": "20px" }}
                        value={qty}
                        onChange={handleQty}
                        helperText={`Max Quantity = ${Math.floor(Number(currentFunds/stock.randomNumber))}`} />
                        <br />
                        <TextField id="filled-basic" label="@Market Price" variant="filled" value={stock.randomNumber} style={{ "margin": "20px" }} disabled />
                    </div>
                    <span className='d-flex align-items-center justify-content-center'> <b>Margin Avilable : {currentFunds.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })} </b> </span>
                    <br />
                    <div className='d-flex  align-items-center justify-content-center mb-2 '>
                    <Button variant="contained" onClick={handleButtonClick}>
                        Buy {stock.stockSymbol}
                    </Button>
                    </div>
                    
                </Box>
            </Modal>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1500}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity={errorType} style={{ "width": "500px", "height": "50px" }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

