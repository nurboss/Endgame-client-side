import { Grid } from '@mui/material';
import React from 'react';
import logo from '../../images/footer-img.png'
import { Button, Container } from '@mui/material';
import '../../style/footer.css';

const Footer = () => {
    return (
        <div style={{ marginBottom: '-30px', paddingTop: '30px', paddingBottom: '10px', background: '#fff' }}>
            <hr style={{ background: 'grey', marginBottom: '60px' }} />

            <Container sx={{ flexGrow: 1, }}>
                <Grid style={{ textAlign: 'left', justifyContent: 'center', alignItems: 'center' }} container>
                    <Grid item xs={12} sm={6} md={8}>
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img src={logo} className="img-fluid footer-logo" alt="" />
                            <div style={{ paddingRight: '20 px' }}>
                                <h2 style={{ fontSize: '20px', color: '#32A262', fontWeight: '700' }}>Our Medical</h2>
                                <p style={{ fontSize: '15px', color: 'gray', marginRight: '20px' }}>Yam Yam's development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <h2 style={{ fontSize: '20px', color: '#009740' }}>Company Address</h2>
                        <p style={{ fontSize: '15px' }}>GEC More Chittagong, Bangladesh.</p>
                        <p style={{ marginBottom: '4px', fontSize: '18px', fontWeight: 'bold' }}>Call Now</p>
                        <div>
                            <Button style={{ background: '#009740', borderRadius: '5px', borderBottomRightRadius: '0' }} variant="contained">+999 017 017 21262</Button>
                        </div>

                    </Grid>
                </Grid>
                <p style={{ fontSize: '14px', fontWeight: '300', paddingTop: '20px', textAlign: 'center', color: '#009740' }}>Copyright 2022 All Rights Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;