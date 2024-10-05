import React, { useEffect, useState } from 'react';
import { Button, Snackbar, Modal, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import axios from 'axios';

export default function AddFundsBtn({ setCurrentFunds }) {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [funds, setFunds] = useState(0)
    const [msgType, setmsgType] = useState('success')
    const [message, setMessage] = useState('Added Funds Successfully')

    async function getCurrentFunds() {
        let funds = await axios.get("http://localhost:8080/getFunds");
        console.log(funds);
        setCurrentFunds(funds.data.fundsAvilable);
    }

    let handleAddFundsChange = (e) => {
        setFunds(e.target.value);
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

    const handleButtonClick = () => {
        async function getFunds(params) {
            let postData = {
                fundsAvilable: funds
            }
            let resultPost = await axios.post("http://localhost:8080/addFunds", { funds: postData.fundsAvilable });
            getCurrentFunds();
        }
        getFunds();
        setSnackbarOpen(true);
        handleModalClose();
    };

    return (
        <div>
            <Button variant="outlined" style={{ "backgroundColor": "rgb(40, 184, 81)", "color": "whitesmoke" }} onClick={handleModalOpen}>
                Add Funds
            </Button>

            <Modal open={modalOpen} onClose={handleModalClose}>
                <Box sx={{ width: "50%", padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: "15%" }}>
                    <div className="container d-flex ">
                        <TextField value={funds} onChange={handleAddFundsChange} id="outlined-basic" type='number' style={{ "marginRight": "20px", "width": "40rem" }} label="Enter Funds to Add" variant="outlined" />
                        <Button variant="contained" onClick={handleButtonClick} style={{ "color": "white", "backgroundColor": "green" }}>
                            Add Funds
                        </Button>
                    </div>

                </Box>
            </Modal>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Snackbar message displayed!"
                anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'right' }}
            >
                <Alert severity={msgType} style={{ "width": "500px", "height": "50px" }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

