import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import useAuth from '../../Firebase/useAuth';

const CheckoutFrom = ({paydata}) => {
  const {visit, patientName, _id } = paydata;
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const [procesing, setProcesing] = useState(false);
  const [ clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const price = visit;


  useEffect( () => {
      fetch('https://quiet-crag-61068.herokuapp.com/create-payment-intent' , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({price}),
      })
      .then((res) => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, [price])

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
      return
    }
    const card = elements.getElement(CardElement);
    if (elements == null) {
      return;
    }
    setProcesing(true)
   
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      setError(error.message)
    } else {
      setError('')
      console.log(paymentMethod);
    }
    // payment intent
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      },
    );
    if(intentError){
      setError(intentError.message);
      setSuccess('')
    } else {
      setError('')
      setSuccess('Your payment Success.')
      setProcesing(false);
      console.log(paymentIntent);
      // save to database
      const payment = 'Paid';
      const url = `https://quiet-crag-61068.herokuapp.com/appointment/${_id}`
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({payment}),
      })
      .then((res) => res.json())
      .then(data => console.log(data))

    }

    
  };
  return (
    <div className='pay-pay'>
      <form onSubmit={handleSubmit} className='pay-card'>
      <CardElement />
      <div className="mt-5 d-flex justify-content-center">
      { procesing ? <CircularProgress /> : <button className='pay-btn' type="submit" disabled={!stripe || success}> Pay {visit} Taka</button> }
      </div>
    </form>
    {
      error && <p style={{ color: 'red', paddingTop: '20px' }}>{error}</p>
    }
    {
      success && <p style={{ color: 'green', paddingTop: '20px' }}>{success}</p>
    }
    </div>
  )
}

export default CheckoutFrom