import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import '../../style/BookAppoinment.css'
import Calender from '../shared/Calender';

const BookAppoinment = () => {
    const {id} = useParams();
    const [singleDetails, setSingleDetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/bookappoinment/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleDetails(data))
    }, [id]);
    const {name, img , _id, doctor, docNumber, visit, location, payment} = singleDetails;
    const [date, setDate] = useState(new Date());
    return (
        <>
      <Header />
        <div className="container">
            
            <div className="row">      
            <h1 className='text-center my-5'>This is appointment route {date.toDateString()}</h1>          
                <div className="col-lg-3 ">
                    <img className="img-fluid appointment-img"  src={img} alt="" />
                </div>
                <div className="col-lg-3">
                    <h1 className="fw-bold">{name}</h1>
                    <p>{doctor}</p>
                    <p>{docNumber}</p>
                    <p>{visit}</p>
                    <p>{location}</p>
                    <p>{payment}</p>
                    
                    <Link to={`/bookappoinment/${_id}`}>
                    <button className="car-btn">Confirm Appointment</button>
                    </Link>
                </div>   
                <div className="col-lg-6">
                    <Calender date={date} setDate={setDate} />
                </div>                       
            </div>
        </div>
        </>
    );
};

export default BookAppoinment;