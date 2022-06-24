import React from 'react'

const ShowDocCart = (props) => {
    const { name, email, image } = props.docdata;
  return (
    <div className='col-lg-3 text-center'>
        <img style={{ width: '200px'}} src={`data:img/png;base64,${image}`} alt="" />
        <h4>{name}</h4>
        <h4>{email}</h4>
    </div>
  )
}

export default ShowDocCart