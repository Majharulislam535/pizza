import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useCartApi from '../../ContextApi/useCartApi';

const PrivetRoute = ({ children, ...rest }) => {
    const { firebase } = useCartApi();
    const { user } = firebase;
    const location = useLocation();

    return (
        user.email ? children :
            <Navigate to="/login"
                replace
                state={{ path: location.pathname }}
            />
    );
};

export default PrivetRoute;