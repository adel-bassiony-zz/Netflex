import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()
    const dispatch = useDispatch()

    
    // ----------------------------------------------------------------------------------------------------
    // Component Functions
    // ----------------------------------------------------------------------------------------------------
    const login = () => {
        let requestBody = {
            "email": email,
            "password": password
        }

        // If Real API Working
        // axios.post(``, requestBody)
        //     .then(res => {
        //         history.push('/')
        //     })
        //     .catch(err => {
                
        //     })
        
        // Dummy login
        dispatch({ type: "Auth_Login", isAuth: true })
        history.push('/')
    }
    

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="row align-items-center vh-100">
            <div className="col-md-6 offset-md-3">

                <h4>Login</h4>
                <p>Enter your email and password</p>

                <div className="card p-4 mt-4">
                    {/* Email Field */}
                    <div className="w-100 mt-2">
                        <label>Email Address</label>
                        <input
                            placeholder="Enter your email address"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="w-100 mt-2">
                        <label>Password</label>
                        <input
                            placeholder="Enter your password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Actions Buttons */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button
                                type="button"
                                className="w-100 btn btn-success"
                                onClick={login}>Login</button>
                        </div>
                        <div className="col-md-6">
                            <Link to="/register" className="w-100 btn btn-dark">Register</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}