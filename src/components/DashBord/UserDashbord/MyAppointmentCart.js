import React from 'react'
import '../../../style/appCart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const MyAppointmentCart = (props) => {
    const {date, location,  visit, serviceName, _id} = props.send;
    

  return (
    <div className='appointment-box'>
        <h4>{serviceName} Checkup</h4>
        <h4 style={{color: '#32A262'}}>{date}</h4>
        <h4>{location}</h4>
        { visit.payment === 'Paid' ? <h4 style={{ color: '#32A262', fontWeight: 'bold'}}>{visit.payment}</h4>:
          <h4>{visit}৳</h4>}
        { visit.payment !== 'Paid' &&
          <DeleteIcon style={{ color: 'red'}} onClick={() => props.func(_id)} />}
        { visit.payment !== 'Paid' &&
          <Link to={`/dashbord/dashbord/payment/${_id}`}>
          <button className="pay-btn">Pay</button>
          </Link>  
        }
    </div>
  )
}

export default MyAppointmentCart