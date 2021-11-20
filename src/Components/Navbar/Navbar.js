import React from 'react';
import './Navbar.css';
import logo from './../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/"><img className="logo" src={logo} alt="" /></NavLink>
            <nav className="navbar">
                <NavLink to="/"><i class="fas fa-home"></i> HOME</NavLink>
                <NavLink to="/tours"><i class="fas fa-bus"></i> TOURS</NavLink>
                <NavLink to="/booking"><i class="fas fa-pen"></i> BOOKING</NavLink>
                <NavLink to="/shop"><i class="fas fa-shopping-cart"></i> SHOP</NavLink>
                <NavLink to="/blogs"><i class="fas fa-book"></i> BLOGS</NavLink>
                <NavLink to="/gallery"><i class="fas fa-leaf"></i> GALLERY</NavLink>
                <span id="login"><NavLink to="/login"><i class="fas fa-sign-in-alt"></i> LOGIN</NavLink></span>
                <span id="signup"><NavLink to="/signup">SIGNUP</NavLink></span>
            </nav >
        </div >
    );
};

export default Header;