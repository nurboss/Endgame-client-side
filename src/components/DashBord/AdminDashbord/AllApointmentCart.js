import React from 'react'
import '../../../style/appCart.css'
import DeleteIcon from '@mui/icons-material/Delete';

const AllApointmentCart = (props) => {
    const {date, drNumber, docName,  patientName, serviceName, _id} = props.send;
    

  return (
    <div className='appointment-box'>
        <h4>{docName}</h4>
        <h4>{drNumber}</h4>
        <h4 style={{color: '#32A262'}}>{date}</h4>
        <h4>{serviceName}</h4>
        <h4>{patientName}</h4>
        <DeleteIcon style={{ color: 'red'}} onClick={() => props.func(_id)} />
    </div>
  )
}

export default AllApointmentCart
