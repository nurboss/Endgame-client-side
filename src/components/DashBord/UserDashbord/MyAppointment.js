import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/useAuth';
import MyAppointmentCart from './MyAppointmentCart'

const MyAppointment = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        const url = `https://quiet-crag-61068.herokuapp.com/myorder/${email}`;
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
  

    let totalVisit = 0;
     for(const visits of myOrder){
        totalVisit = totalVisit + visits.visit ;
     }
    let parsenValue;
    if(totalVisit > 4500){
      parsenValue = totalVisit * 0.2;
    } else {
      parsenValue = 0; 
    }
     
    return (
        <div>
            <div className="container ">
                <h4 className="text-center fw-bold order-text my-3">Your have {myOrder?.length} doctors Appointment</h4>
                <div className="row my-5">
                    {
                        myOrder.map(data => <MyAppointmentCart
                            key={data._id}
                            send={data}
                            func={handleDeleteOrder}
                            totalVisit={totalVisit}
                        ></MyAppointmentCart>)
                    }
                </div>
            </div>
            
            <h4 className='text-end fw-bold'> Your total visit is = {totalVisit} Taka.</h4>
            { totalVisit > 4500 &&
              <h4 className='text-end fw-bold'>20% discount = {parsenValue} Taka.</h4>
            }
            <h4 className='text-end fw-bold'>Total = {totalVisit - parsenValue} Taka.</h4>

        </div>
    );
};

export default MyAppointment;

