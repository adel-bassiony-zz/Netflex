import * as actionTypes from './actions';

// Define initialState
const initialState = {
    isAuth: localStorage.getItem('isAuth') ?? false,
    token: localStorage.getItem('token') ?? null,
    userInfo: null,
}

// Define the Auth Reducer
export default function auth_reducer(state = initialState, action: any) {
    switch (action.type) {
        
        // Auth: Login
        case actionTypes.Auth_Login:
            localStorage.setItem('isAuth', "true");
            return {
                ...state,
                isAuth: action.isAuth,
            }
        
        // Auth: Logout
        case actionTypes.Auth_Logout:
            localStorage.removeItem('isAuth');
            return {
                ...state,
                isAuth: false,
            }
        
        // Auth: Default
        default:
            return state;
    }
};
