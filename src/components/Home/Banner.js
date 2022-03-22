import React from 'react';
import banner_img from '../../images/banner.png';
import '../../style/banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container'>
            <div className="row view d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className='main-header'>Your Good Health is <br />Our Happiness</h1>
                    <p className='details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, rerum!</p>
                    <Link to="/services">
                        <button className='green-btn'>Our Services</button>
                    </Link>
                    
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className='img-fluid' src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;