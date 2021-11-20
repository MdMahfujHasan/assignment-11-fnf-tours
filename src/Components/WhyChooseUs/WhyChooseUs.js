import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h1 id="why-choose-us-title">WHY CHOOSE US?</h1>
            <div className="why-choose-us-cards">
                <div className="d-flex why-choose-us-card">
                    <div>
                        <i class="fas fa-globe-europe"></i>
                    </div>
                    <div>
                        <h4>Diverse Destinations</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore.</p>
                    </div>
                </div>
                <div className="d-flex why-choose-us-card">
                    <div>
                        <i class="fas fa-money-check-alt"></i>
                    </div>
                    <div>
                        <h4>Value for Money</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore.</p>
                    </div>
                </div>
                <div className="d-flex why-choose-us-card">
                    <div>
                        <i class="fas fa-camera-retro"></i>
                    </div>
                    <div>
                        <h4>Beautiful Places</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore.</p>
                    </div>
                </div>
                <div className="d-flex why-choose-us-card">
                    <div>
                        <i class="far fa-calendar-check"></i>
                    </div>
                    <div>
                        <h4>Fast Booking</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore.</p>
                    </div>
                </div>
                <div className="d-flex why-choose-us-card">
                    <div>
                        <i class="far fa-comment-dots"></i>
                    </div>
                    <div>
                        <h4>Support Team</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore.</p>
                    </div>
                </div>
                <div className="d-flex why-choose-us-card">
                    <div>
                        <i class="fas fa-bus-alt"></i>
                    </div>
                    <div>
                        <h4>Passionate Travel</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;