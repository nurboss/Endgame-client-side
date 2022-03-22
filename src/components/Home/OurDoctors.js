import React from 'react'
import img_1 from '../../images/doc-1.png';
import img_2 from '../../images/doc-2.png';
import img_3 from '../../images/doc-3.png';
import img_4 from '../../images/doc-4.png';

const OurDoctors = () => {
  return (
    <div className='container my-5'>
      <p className='text-center service-header '>OUE DOCTORS</p>
        <h4 className='sec-header'>The Doctors We have</h4>
        <div className="row">
        <div className='col-lg-3'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '200px'}} src={img_1} alt="" />
            <h4 className='text-center fw-bold mt-3'>Md. Arif Hasan</h4>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, sit?</p>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '200px'}} src={img_2} alt="" />
            <h4 className='text-center fw-bold mt-3'>Mr. Shojib Islam</h4>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, sit?</p>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '200px'}} src={img_3} alt="" />
            <h4 className='text-center fw-bold mt-3'>Mr. Nayem Hasan</h4>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, sit?</p>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '200px'}} src={img_4} alt="" />
            <h4 className='text-center fw-bold mt-3'>Md. Akbar Islam</h4>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, sit?</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default OurDoctors