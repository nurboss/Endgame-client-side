import React, { useEffect, useState } from 'react'
import ServiceCart from './ServiceCart';
import '../../style/ourServices.css'


const OurServices = () => {
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(result => result.json())
    .then(service => setData(service))
  }, [])

  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="bg-custom py-5">
      <div className='container mb-5 '>
        <p className='text-center service-header'>OUE SERVICES</p>
        <h4 className='sec-header'>Services We Provide</h4>
        <div className="row">
        {
                data.map(dada => <ServiceCart
                data={dada}
                key={dada._id}
                ></ServiceCart> )
        }
        </div>
    </div>
    </div>
  )
}

export default OurServices;