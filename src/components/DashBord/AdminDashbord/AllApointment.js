import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/useAuth';
import AllApointmentCart from './AllApointmentCart'

const AllApointment = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        const url = `https://quiet-crag-61068.herokuapp.com/allorder`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [email]);

    const handleDeleteOrder = id => {
        fetch(`https://quiet-crag-61068.herokuapp.com/deleteOrde/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Are you Sure you want to cancel you order.')
                    const remainig = myOrder.filter(service => service._id !== id);
                    setMyOrder(remainig);
                }

            });
    }
  

  
     
    return (
        <div>
            <div className="container ">
                <h4 className="text-center fw-bold order-text my-3">Total {myOrder.length} Appointment</h4>
                <div className="row my-5">
                    {
                        myOrder.map(data => <AllApointmentCart
                            key={data._id}
                            send={data}
                            func={handleDeleteOrder}
                        ></AllApointmentCart>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default AllApointment;
