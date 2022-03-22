import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import googleImg from '../../images/google.png'
import useAuth from '../Firebase/useAuth';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Registration = () => {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();
    const location = useLocation();

    const { user, open, setOpen, registerUser, isLoading, error, googleSignin } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        if (user.email) {
            alert('Please logout first')
        } else {
            if (loginData.password1 !== loginData.password2) {
                alert("Password does not matched!")
                return;
            }
            registerUser(loginData.email, loginData.password1, loginData.name, navigate)
        }
    }

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    // google pop up signin
    const handleGoogleSignin = () => {
        if (!user?.email) {
            googleSignin(location, navigate);
        } else {
            alert("please Logout first!")
        }
    }

    // snackbar error controller
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Header></Header>
            <div style={{ height: 'calc(100vh - 60px)', marginTop: '2px', paddingTop: '50px' }}>
                <Container>
                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={6} lg={6}>
                            <div style={{ width: '100%' }}>
                                <h3 style={{ fontSize: '33px', color: '#385a64' }}>
                                    Please Register!
                                </h3>

                                {!isLoading &&
                                    <form style={{ width: '100%' }} onSubmit={handleRegister}>
                                        <TextField
                                            style={{ width: '100%', marginBottom: '25px' }}
                                            label="Your Name"
                                            variant="standard"
                                            name="name"
                                            onBlur={handleOnChange}
                                            required
                                        />
                                        <TextField
                                            style={{ width: '100%', marginBottom: '25px' }}
                                            label="Email"
                                            variant="standard"
                                            name="email"
                                            onBlur={handleOnChange}
                                            required
                                        />
                                        <TextField
                                            style={{ width: '100%', marginBottom: '25px' }}
                                            type="password"
                                            label="Password"
                                            variant="standard"
                                            name="password1"
                                            onBlur={handleOnChange}
                                            required
                                        />
                                        <TextField
                                            style={{ width: '100%', marginBottom: '25px' }}
                                            type="password"
                                            label="Enter Password Again"
                                            variant="standard"
                                            name="password2"
                                            onBlur={handleOnChange}
                                            required
                                        />

                                        <Box>
                                            <Button
                                                type="submit"
                                                style={{ width: '100%', padding: '10px', backgroundColor: 'crimson', marginTop: '10px' }} variant="contained">Register</Button>
                                        </Box>
                                        <p style={{ marginTop: '10px' }} className="error-txt text-danger">
                                            <Link style={{ color: 'crimson' }} to="/login">Already Have an account?</Link>
                                        </p>
                                    </form>
                                }
                                {
                                    isLoading && <CircularProgress />
                                }
                                <button onClick={handleGoogleSignin} className="google-btn">
                                    <img className="img-fluid" src={googleImg} alt="" />
                                    Sign in with Google
                                </button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <img className='img-fluid' src="https://i.ibb.co/kmFMt8M/background.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
                {/* snackbar of error show */}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Registration;