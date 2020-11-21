import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import auth_reducer from './auth_reducer';
// import { logger } from 'redux-logger';

// Redux: Combine Multiple Reducers together.
const rootReducer = combineReducers({
    auth_reducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
  
// Redux: Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux: Setup the Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;