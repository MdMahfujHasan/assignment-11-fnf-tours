import React from 'react';
import './Bookingss.css';
import Navbar from './../../Components/Navbar/Navbar';
import Footer from './../Footer/Footer';

const Booking = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 id="booking-title">BOOKING</h1>
            <h1 style={{ fontSize: '3em' }}>Hey, Where do you want to go?</h1>
            <div className="schedule">
                <div className="time">
                    <h5>Choose Time</h5>
                    <input type="time" name="" id="" />
                </div>
                <div className="time">
                    <h5>Choose Week</h5>
                    <input type="week" name="" id="" />
                </div>
                <div className="time">
                    <h5>Choose Date</h5>
                    <input type="datetime-local" name="" id="" />
                </div>
            </div>
            <br />
            <div>
                <div>
                    <i class="fas fa-plane-departure me-5"></i>
                    <i class="fas fa-plane me-5"></i>
                    <i class="fas fa-plane-arrival me-5"></i>
                    <i class="fas fa-map-marked-alt"></i>
                </div>
                <br />
                <div>
                    <button className="btn btn-dark px-5 mb-3">Search Flight <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;