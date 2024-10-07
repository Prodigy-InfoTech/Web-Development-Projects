import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import App from '../src/components/WatchList/BuyButton/NewBuyButton';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BuyButton({ stock }) {
  const [qty,setQty] = useState()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handleQty = (e)=>{
    if (e.target.value >= 0 && e.target.value <= 10){
      setQty(e.target.value)
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" size='small' style={{ "backgroundColor": "blue" }}>B</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ "backgroundColor": "rgb(195, 235, 228)" }}>
            <b>Buy </b> {stock.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              type='number'
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              style={{ "margin": "20px" }}
              value={qty}
              onChange={handleQty}
              helperText="Enter the quantity max(10)" />
            <br />
            <TextField id="filled-basic" label="@Market Price" variant="filled" value={stock.price} style={{ "margin": "20px" }} disabled />
          </Typography>
          <App/>
        </Box>
      </Modal>
    </div>
  );
}
