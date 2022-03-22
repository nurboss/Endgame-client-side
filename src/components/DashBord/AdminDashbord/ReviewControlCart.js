import React from 'react'
import Rating from '@mui/material/Rating';

const ReviewControlCart = (props) => {
    const { drName, description, docImg, _id, rating, approved} = props.data
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

                    <div>
                    { approved === 'no' ?
                        <button onClick={() => props.sfunck(_id)} className='green-btn'>Approve</button> :
                        <button onClick={() => props.funck(_id)} className='red-btn' >Delete</button>
                    }
                    </div>

                    
                </div>
            </div>
        </div>
  )
}

export default ReviewControlCart
