import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import Modals from '../shared/Modals';

const SingleService = () => {
    const {id} = useParams();
    const [singleDetails, setSingleDetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleDetails(data))
    }, [id]);
    const {name, img , doctor, docNumber, visit, location, payment} = singleDetails;

    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
      <Header />
        <div className="container ">
            <div className="row view">                
                <div className='d-flex justify-content-center align-items-center'>
                <div className="col-lg-5 d-flex justify-content-center">
                    <img className="img-fluid" style={{ width: '300px'}} src={img} alt="" />
                </div>
                 <div className="col-lg-7">
                     
                    <h5 className='mb-3'><span className='fw-bold'>The name of organ:</span> {name}.</h5>
                    <h5 className='mb-3'><span className='fw-bold'>Dr. Name:</span> {doctor}.</h5>
                    <h5 className='mb-3'><span className='fw-bold'>Number:</span> {docNumber}.</h5>
                    <h5 className='mb-3'><span className='fw-bold'>Visit:</span> {visit}</h5>
                    <h5 className='mb-3'><span className='fw-bold'>Chamber Location:</span> {location}.</h5>
                    <h5 className='mb-3'><span className='fw-bold'>Payment Method:</span> {payment}.</h5>
                    
                    <button onClick={handleModalOpen} className="car-btn green-btn">Book an Appointment</button>
                    
                 </div> 
                </div>                              
            </div>
        </div>
        <Modals handleModalClose={handleModalClose} openModal={openModal} singleDetails={singleDetails} handleModlClose={handleModalClose} 
        setModalOpen={setModalOpen}  />
        </>
    );
};

export default SingleService;