import React from 'react'
import '../../../style/appCart.css'
import DeleteIcon from '@mui/icons-material/Delete';

const MyAppointmentCart = (props) => {
    const {date, location,  visit, serviceName, _id} = props.send;
    

  return (
    <div className='appointment-box'>
        <h4>{serviceName}</h4>
        <h4>{date}</h4>
        <h4>{location}</h4>
        <h4>{visit}৳</h4>
        <DeleteIcon style={{ color: 'red'}} onClick={() => props.func(_id)} />
    </div>
  )
}

export default MyAppointmentCart