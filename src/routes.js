import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Lazy Components
const Error404 = lazy(() => import('./components/Error404/Error404'));

// Application Routes
const Routes = (
    <Switch>

        {/* General Routes */}
        <Route path="*" component={Error404} />

    </Switch>
);

export default Routes;