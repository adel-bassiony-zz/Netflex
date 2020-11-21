import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

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

        <Route path="/" exact component={Movies} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/watch_list" exact component={WatchList} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" exact component={ShowMovie} />
        
        {/* General Routes */}
        <Route path="*" component={Error404} />

    </Switch>
);

export default Routes;