import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Routes from 'routes';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

export default function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Suspense fallback={<Loader message="Loading..."/>}>
                    {Routes}
                </Suspense>
            </Router>
        </ErrorBoundary>
    );
}
