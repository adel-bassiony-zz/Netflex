import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

// Lazy Components
const Error404 = lazy(() => import('components/Error404/Error404'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const WatchList = lazy(() => import('pages/WatchList/WatchList'));
const ShowMovie = lazy(() => import('pages/ShowMovie/ShowMovie'));

// Application Routes
const Routes = (
    <Switch>

        <PrivateRoute path="/" exact component={Movies} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/watch_list" exact component={WatchList} />
        <PrivateRoute path="/movies" exact component={Movies} />
        <PrivateRoute path="/movies/:id" exact component={ShowMovie} />
        
        {/* General Routes */}
        <Route path="*" component={Error404} />

    </Switch>
);

export default Routes;