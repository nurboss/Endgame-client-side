import React from 'react'
import Rating from '@mui/material/Rating';

const ReviewCart = (props) => {
    const { drName, description, docImg, userName , rating} = props.data
  return (
        <div className="col-lg-3 col-sm-6 pt-5">
            <div className="text-center">
                <div>
                    <img style={{ width: '150px'}} src={docImg} alt="" />
                </div>
                <div>
                    <h4 className='fw-bold mt-3'>{drName}</h4>
                    <p>{description}</p>
                    <Rating name="read-only" value={rating} readOnly />
                    <h6 className='fw-bold'>Patient Name: <span style={{color: '#32A262'}}>{userName}</span> </h6>
                    
                </div>
            </div>
        </div>
  )
}

export default ReviewCart