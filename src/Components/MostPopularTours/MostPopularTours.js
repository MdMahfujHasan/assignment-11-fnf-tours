import React from 'react';
import './MostPopularTours.css';
import nature1 from './../../images/nature-1.jpg';
import nature2 from './../../images/nature-2.jpg';
import nature3 from './../../images/nature-3.jpg';
import nature4 from './../../images/nature-4.jpg';

const MostPopularTours = () => {
    return (
        <div>
            <h5 id="take-a-took-at-our-title">Take a Look at Our</h5>
            <h1 id="most-popular-tours-title">MOST POPULAR TOURS</h1>
            <div className="most-popular-tours-cards">
                <div className="most-popular-tours-card">
                    <img height="225px" src={nature1} alt="" />
                    <h3>Cost: $500</h3>
                    <h2>Surfing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, sint quaerat. Ipsam est explicabo deserunt minus maiores perspiciatis possimus iste.</p>
                    <div className="d-flex justify-content-center p-3">
                        <div className="me-2 text-danger"><i class="far fa-clock"></i> 10 Hours</div>
                        <div>
                            <span className="me-1">Rating:</span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    <div><button className="btn btn-primary">Add This Tour</button></div>
                </div>
                <div className="most-popular-tours-card">
                    <img height="225px" src={nature2} alt="" />
                    <h3>Cost: $1200</h3>
                    <h2>Hot Air Ballooning</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, sint quaerat. Ipsam est explicabo deserunt minus maiores perspiciatis possimus iste.</p>
                    <div className="d-flex justify-content-center p-3">
                        <div className="me-2 text-danger"><i class="far fa-clock"></i> 3 Hours</div>
                        <div>
                            <span className="me-1">Rating:</span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div><button className="btn btn-primary">Add This Tour</button></div>
                </div>
                <div className="most-popular-tours-card">
                    <img height="225px" src={nature3} alt="" />
                    <h3>Cost: $850</h3>
                    <h2>Paragliding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, sint quaerat. Ipsam est explicabo deserunt minus maiores perspiciatis possimus iste.</p>
                    <div className="d-flex justify-content-center p-3">
                        <div className="me-2 text-danger"><i class="far fa-clock"></i> 2.5 Hours</div>
                        <div>
                            <span className="me-1">Rating:</span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    <div><button className="btn btn-primary">Add This Tour</button></div>
                </div>
                <div className="most-popular-tours-card">
                    <img height="225px" src={nature4} alt="" />
                    <h3>Cost: $250</h3>
                    <h2>Rafting</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, sint quaerat. Ipsam est explicabo deserunt minus maiores perspiciatis possimus iste.</p>
                    <div className="d-flex justify-content-center p-3">
                        <div className="me-2 text-danger"><i class="far fa-clock"></i> 2 Hours</div>
                        <div>
                            <span className="me-1">Rating:</span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div><button className="btn btn-primary">Add This Tour</button></div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularTours;