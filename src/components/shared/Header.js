import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/header-loggo.png';
import '../../style/header.css'
import useAuth from '../Firebase/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <Navbar style={{ fontFamily: 'Mochiy Pop P One' }} collapseOnSelect expand="lg" className="navbar" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} className="img-fluid" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="me-lg-3 nav-link manu-items fonts" as={Link} to="/home">Home</Link>
                            {/* <Link className="me-lg-3 nav-link manu-items fonts" as={Link} to="/aboutus">About Us</Link> */}
                            <Nav.Link className="me-lg-3 nav-link fonts" as={Link} to="/services">Services</Nav.Link>
                            
                            {
                                user?.email ?
                                    <>
                                        <Nav.Link className="me-lg-2 fonts nav-link" as={Link} to="/dashbord">Dashboard</Nav.Link>
                                        <button onClick={handleLogout} className="green-btn me-3 ">Sign Out</button>
                                        
                                    </>
                                    :
                                    <Nav.Link className="me-lg-3 nav-link fonts" as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                <Link to="/user">
                                    {user.photoURL ? <img className="user-img" src={user?.photoURL} alt="" /> :
                                        <span className="user-logo fonts"><i className="fas fa-user"></i></span>
                                    }
                                </Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;