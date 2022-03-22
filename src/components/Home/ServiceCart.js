import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/serviceCart.css';

const ServiceCart = (props) => {
    const { name , img, _id} = props.data;
  return (
      
    <div id='sevices' className='col-lg-4 col-md-6 col-sm-12 text-center'>
        <div className='box'>
            <div className='box-img'>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='box-text'>
                <h5 className='fw-bold mt-3' >{name} Checkup</h5>
                <p className='text mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum libero ducimus consequuntur? Optio inventore voluptate minima laborum aperiam ad dolorum.</p>
            </div>
            <div>
                <Link to={`/services/${_id}`}>
                    <button className="car-btn-new mt-2 green-btn">More Details</button>
                </Link>
                
            </div>
        </div>       
    </div>
  )
}

export default ServiceCart