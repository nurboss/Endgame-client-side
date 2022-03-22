import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import useAuth from '../Firebase/useAuth';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import googleImg from '../../images/google.png'
import '../../style/login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, error, open, setOpen, googleSignin, isLoading, signinUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    console.log(loginData);

    // login user 
    const handleLogin = (e) => {
        e.preventDefault();
        signinUser(loginData.email, loginData.password, location, navigate)
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
    const handleClose = (event, reason) => {
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
                                    Please Login
                                </h3>
                                {!isLoading
                                    && <form style={{ width: '100%' }} onSubmit={handleLogin}>
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
                                            name="password"
                                            onBlur={handleOnChange}
                                            required
                                        />

                                        <Box>
                                            <Button
                                                type="submit"
                                                style={{ width: '100%', padding: '10px', backgroundColor: 'crimson', marginTop: '10px' }} variant="contained">Submit</Button>
                                        </Box>
                                        <p style={{ marginTop: '10px' }} className="error-txt text-danger">
                                            <Link style={{ color: 'crimson' }} to="/registration">Are You New User?</Link>
                                        </p>

                                    </form>
                                }
                                {
                                    isLoading &&
                                    <CircularProgress />
                                }

                                <div className=" w-100">
                                    <button onClick={handleGoogleSignin} className="google-btn">
                                        <img className="img-fluid" src={googleImg} alt="" />
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <img className='img-fluid ' src="https://i.ibb.co/kmFMt8M/background.png" alt="" />
                        </Grid>
                    </Grid>
                    {/* snackbar of error show */}
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    </Snackbar>
                </Container>
            </div>
            <Footer></Footer>


        </>
    );
};

export default Login;