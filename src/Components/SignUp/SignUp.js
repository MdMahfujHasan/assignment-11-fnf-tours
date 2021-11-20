import React from 'react';
import './SignUp.css';
import Navbar from './../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 id="sign-up-title">SIGN UP</h1>
            <form>
                <div class="input-group mb-3 w-25 mx-auto">
                    <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3 w-25 mx-auto">
                    <input type="email" class="form-control" placeholder="E-Mail" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3 w-25 mx-auto">
                    <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3 w-25 mx-auto">
                    <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <input type="checkbox" name="" id="" />
                <small> I accept the<a className="href-link" href="#">Terms</a> and <a className="href-link" href="#">Conditions</a></small>
                <br /><br />
                <input className="btn btn-dark" type="submit" value="CREATE ACCOUNT" />
                <p>Already have an account? <NavLink to="/login" className="href-link">Login</NavLink></p>
                <br />
                <button className="btn btn-primary"><i class="fab fa-facebook"></i> Continue with Facebook</button>
            </form>
        </div>
    );
};

export default SignUp; <h1>this is signup</h1>