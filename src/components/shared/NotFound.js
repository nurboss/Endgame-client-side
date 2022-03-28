import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/NotFound.css';

const NotFound = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center d-flex align-items-center flex-column page-hight">
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <div className="d-flex justify-content-center mt-3"><Link to="/home"><button className="green-btn">Go Back To Home</button></Link></div>
            </div>                  
        </div>
    );
};

export default NotFound;