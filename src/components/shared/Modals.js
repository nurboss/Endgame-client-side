import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import useAuth from '../Firebase/useAuth';
import Grid from '@mui/material/Grid';
import Calender from './Calender';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modals = ({openModal, handleModalClose, singleDetails, handleModlClose, setModalOpen}) => {
  const { name, visit, location } = singleDetails;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const [date, setDate] = useState(new Date());

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            visit,
            location,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to the server
        fetch('https://quiet-crag-61068.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                  setModalOpen(true);
                    handleModlClose();
                }
            });

        e.preventDefault();
    }
    
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={openModal}
    onClose={handleModalClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
        timeout: 500,
    }}
>
    <Fade in={openModal}>
        <Box sx={style}>
        <Grid container spacing={2}>

        <Grid item xs={6}>
              <Calender date={date} setDate={setDate} />
            </Grid>

          <Grid item xs={6}>         
            <Typography className='fw-bold' style={{marginLeft: '10px', padding: '5px'}} id="transition-modal-title" variant="h6" component="h2">
                Name of Organ: <span style={{color: '#009740'}}>{name}</span> 
            </Typography>
            <form onSubmit={handleBookingSubmit}>
                <TextField
                    disabled
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    label="Visit"
                    defaultValue={visit}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="patientName"
                    label="Name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    label="Email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    label="Phone Number"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <Typography style={{marginLeft: '10px', padding: '5px'}} variant="h6" className='fw-bold' gutterBottom component="div">
                    Date: <span style={{color: '#009740'}}>{date.toDateString()}</span> 
                    </Typography>
                
                <button className='green-btn ms-2' type="submit" variant="contained">Submit</button >                
            </form>  
            </Grid>
        </Grid>
                     
        </Box>
        
        
    </Fade>
  </Modal>
  )
}

export default Modals