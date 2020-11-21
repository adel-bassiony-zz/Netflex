import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    let history = useHistory()
    
    // ----------------------------------------------------------------------------------------------------
    // Component Functions
    // ----------------------------------------------------------------------------------------------------
    const register = () => {
        let requestBody = {
            "email": email,
            "password": password,
            "password_confirmation": passwordConfirmation,
        }

        // axios.post(``, requestBody)
        //     .then(res => {
        //         history.push('/home')
        //     })
        //     .catch(err => {
                
        //     })
    }
    

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="row align-items-center vh-100">
            <div className="col-md-6 offset-md-3">

                <h4>Register</h4>
                <p>Create new account to continue</p>

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

                    {/* Password Confirmation Field */}
                    <div className="w-100 mt-2">
                        <label>Password Confirmation</label>
                        <input
                            placeholder="Enter your password"
                            className="form-control"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </div>

                    {/* Actions Buttons */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button
                                type="button"
                                className="w-100 btn btn-success"
                                onClick={register}>Register</button>
                        </div>
                        <div className="col-md-6">
                            <Link to="/login" className="w-100 btn btn-dark">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}