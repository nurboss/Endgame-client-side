import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutFrom from './CheckoutFrom'
import { Elements } from '@stripe/react-stripe-js'



const stripePromise = loadStripe('pk_test_51KgQGdHDA65eT63Kw4Y9dQLAefvaSbK38FVT2xtxmMaWOKFcNFVYsqwCvivY8uv4aZIESgFhuBkwmjkG8CBL72nS00kHXRZcbj')

const Payment = () => {
    const {appointmentId} = useParams();
    const [ apdata, setApdata] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-crag-61068.herokuapp.com/appoint/${appointmentId}`)
        .then(res => res.json())
        .then(data => setApdata(data));
    },[appointmentId]);
    const {patientName, serviceName, visit} = apdata;
  return (
    <div>
        <h4 className='text-center fw-bold'>{patientName} Please Pay <span style={{color: 'rgb(99 91 255)'}}>{visit} Taka</span> for your {serviceName} Checkup. </h4>
        {
          visit && <Elements stripe={stripePromise}>
          <CheckoutFrom paydata={apdata} />
        </Elements>
        }
    </div>
  )
}

export default Payment