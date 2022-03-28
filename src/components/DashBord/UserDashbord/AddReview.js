import React from 'react';
import { useForm } from "react-hook-form";
import '../../../style/AddReview.css';
import useAuth from '../../Firebase/useAuth';

const AddReview = () => {
  const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.approved = 'no';
        data.docImg = 'https://i.ibb.co/z2RXYFb/doc-1.png';
        data.userEmail = user.email;
        data.userName = user.displayName;
        fetch('http://localhost:5000/addreview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
            alert('Your Successfully give a comment.')
            reset()
            }
        })
       
        
    
    };
    return (
        <div className="container mt-5 order-from view">
            <h2 className="text-center fw-bold">Give a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input type="text" {...register("drName")} placeholder="Dr. Name" /> <br />

                <textarea style={{ width: "100%", border: "2px solid black", padding: "10px", marginBottom: "10px", resize: "none" }} className="text-area" type="text" {...register("description")} placeholder="Comment"  /> <br />

                
                <input type="number"  {...register("rating")} placeholder="Rating 1-5 Only" /> <br />

                <input style={{border:"none"}} className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;
