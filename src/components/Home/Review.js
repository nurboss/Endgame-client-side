import React, { useEffect, useState } from 'react';
import ReviewCart from './ReviewCart';
import '../../style/Review.css';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data));

    }, []);
    const filterData = review.filter((data) => data.approved === 'yes' );
    return (
        <div className="container view pt-5">
            <p className='text-center service-header'>REVIEW</p>
        <h4 className='sec-header'>Patient review about our Doctors.</h4>
        <div className="row">
                      
            {
                filterData.map(data => <ReviewCart
                key={data._id}
                data={data}
                ></ReviewCart>)
            }
            </div>
            
        </div>
    );
};

export default Review;

