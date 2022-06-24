import React, { useEffect, useState } from 'react'
import ShowDocCart from './ShowDocCart';

const ShowDoc = () => {
    const [doctors, setDoctors] = useState([]);
      useEffect(() => {
        fetch('http://localhost:5000/getdoctors')
        .then(result => result.json())
        .then(service => setDoctors(service))
      }, [])
      
  return (
    <div className='container py-5'>
        <h4 className='fw-bold text-center py-5'>This is doctor from the server</h4>

        <div className="row">
        {
            doctors.map(doc => <ShowDocCart
            key = {doc.name}
            docdata = {doc}
            ></ShowDocCart> )
        }
        </div>
    </div>
  )
}

export default ShowDoc