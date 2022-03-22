import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const { user , isLoading} = useAuth();
    if(isLoading){
        return <div style={{ height: '100vh'}} className='d-flex justify-content-center align-items-center'><Spinner animation="border" /></div>
      }
    if (user.email) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;