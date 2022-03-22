import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import Modals from '../shared/Modals';

const SingleService = () => {
    const {id} = useParams();
    const [singleDetails, setSingleDetails] = useState([]);
    useEffect(() => {
        const url = `https://quiet-crag-61068.herokuapp.com/services/${id}`;
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
        <div className="container">
            <div className="row">                
                <div className='d-flex justify-content-center align-items-center'>
                <div className="col-lg-6 ">
                    <img className="img-fluid" style={{ width: '250px'}} src={img} alt="" />
                </div>
                <div className="col-lg-6">
                    <h1 className="fw-bold">{name}</h1>
                    <p>{doctor}</p>
                    <p>{docNumber}</p>
                    <p>{visit}</p>
                    <p>{location}</p>
                    <p>{payment}</p>
                    
                    <button onClick={handleModalOpen} className="car-btn green-btn">Book an Appointment</button>
                    
                </div> </div>                              
            </div>
        </div>
        <Modals handleModalClose={handleModalClose} openModal={openModal} singleDetails={singleDetails} handleModlClose={handleModalClose} 
        setModalOpen={setModalOpen}  />
        </>
    );
};

export default SingleService;