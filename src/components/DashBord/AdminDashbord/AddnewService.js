import React , { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const AddnewService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState(null);
  console.log(img);
  const [success, setSuccess] = useState(false);
  console.log(name, email);
  const handleSubmit = e => {
    e.preventDefault();
    if(!img){
      return
    } 
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('img', img);
    fetch('http://localhost:5000/doctors', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setSuccess(true)
      }
    })
    .catch(error => {
      console.log('Error', error)
    })

  }
  const handleFlie = e => {
     console.log(e.target.files[0]);
     console.log(Math.floor(e.target.files[0].size / 1024) + "KB");
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h4 className='fw-bold'>Add a new Service</h4>
        <Input 
        accept="image/*" 
        multiple type="file" 
        onChange={handleFlie}
        />
        <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>

        <TextField 
        required
        label="Name" 
        variant="standard"
        onChange={e => setName(e.target.value)}
         />
  
        
        <br />
        <br />
        <TextField 
        required
        label="Email" 
        type='email'
        variant="standard"
        onChange={e => setEmail(e.target.value)}
         />
        
        <br />
        <br />
        
        <Input 
        accept="image/*" 
        multiple type="file" 
        onChange={e => setImg(e.target.files[0])}
        />
        <br />
        <br />
        <Button variant="contained" type='submit'>
          Upload
        </Button>
        
        </form>
        {
          success && <p style={{ color: 'green'}} className='fw-bold'>Your added successfully</p>
        }
    </div>
  )
}

export default AddnewService