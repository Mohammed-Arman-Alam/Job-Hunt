import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location =useLocation();
    if(loading){
        return <h1 className='my-100 mx-50'>Loading</h1>;
    }
    if(user){
        return children;
    }  
    return <Navigate to='/Login'></Navigate>;
};

export default PrivateRoute;