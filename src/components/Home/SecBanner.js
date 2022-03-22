import React from 'react';
import Secbanner_img from '../../images/2nd--banner.png';
import '../../style/banner.css';

const SecBanner = () => {
    return (
        <div className='bg-custom'>
            <div className='container'>
            <div className="row view d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className='img-fluid' src={Secbanner_img} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2 className='sec-bold-heading'>Affordable Treatments, Honest and Expenrenced Doctor's.</h2>
                    <h3 className='color-heading'>Friendly Care.</h3>
                    <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quis quam. Veniam aliquam et accusamus rem est illo dolorum reprehenderit magni perspiciatis non? Nulla suscipit officia maiores autem blanditiis aut odio, eos et provident, voluptatem cupiditate sed, quidem quod? Amet.</p>
                    
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default SecBanner;