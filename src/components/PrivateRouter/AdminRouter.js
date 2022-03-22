import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';
import { Spinner } from 'react-bootstrap';


const AdminRouter = ({ children, ...rest }) => {
    const location = useLocation();
    const { admin, user, isLoading} = useAuth();
    if(isLoading){
        return <div style={{ height: '100vh'}} className='d-flex justify-content-center align-items-center'><Spinner animation="border" /></div>
      }
    if (admin && user.email) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default AdminRouter;
