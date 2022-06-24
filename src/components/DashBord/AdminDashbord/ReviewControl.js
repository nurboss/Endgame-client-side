import React, { useEffect, useState } from 'react';
import ReviewControlCart from './ReviewControlCart';

const ReviewControl = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://quiet-crag-61068.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data));

    }, [review]);

    const handleAllDelete = id => {
      fetch(`https://quiet-crag-61068.herokuapp.com/review/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(result => {
          if(result.acknowledged){
          alert('Are you Sure you want to cancel you order.')
      const remainig = review.filter(service => service._id !== id);
      setReview(remainig);
          }
          
      });
      }


      const handleUpdate = id => {
        const approv = "yes";
        const ojecetdata = { approv };
    fetch(`https://quiet-crag-61068.herokuapp.com/updatereview/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(ojecetdata)
    })
    .then(res => res.json())
    .then(result => {
        if(result.acknowledged){
        alert('You update the product Successfully.')
        }
        
    });
    }

  
    return (
        <div className="container view pt-5">
        <h4 className='sec-header'>Approve the review and delete review</h4>
        <div className="row">
                      
            {
                review.map(data => <ReviewControlCart
                key={data._id}
                data={data}
                funck={handleAllDelete}
                sfunck={handleUpdate}
                ></ReviewControlCart>)
            }
            </div>
            
        </div>
    );
};

export default ReviewControl;


