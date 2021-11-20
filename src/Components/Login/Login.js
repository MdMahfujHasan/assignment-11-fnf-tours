import React from 'react';
import './Login.css';
import Navbar from './../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 id="login-title">LOGIN</h1>
            <form>
                <h5 style={{ marginRight: '280px' }}>E-mail</h5>
                <div class="input-group mb-3 w-25 mx-auto">
                    <input type="email" class="form-control" placeholder="Type your e-mail" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <h5 style={{ marginRight: '250px' }}>Password</h5>
                <div class="input-group mb-3 w-25 mx-auto">
                    <input type="password" class="form-control" placeholder="Type your password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <p style={{ marginLeft: '220px', cursor: 'pointer' }}>Forgot Password?</p>
                <input style={{ paddingInline: '150px', borderRadius: '20px' }} className="btn btn-primary" type="submit" value="LOGIN" />
                <p>Or <NavLink to="/signup" className="href-link">Sign Up</NavLink></p>
            </form>
        </div>
    );
};

export default Login;