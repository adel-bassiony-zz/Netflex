import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// React Component
export default function PrivateRoute ({ component: Component, ...props }){
    
    const isAuth = useSelector(state => state.auth_reducer.isAuth)

    if (isAuth) {
        return (
            <Route {...props} render={matchProps => (
                <Component {...matchProps} />
            )} />
        );
    } else {
        return <Redirect to="/auth/login" />
    }
}
