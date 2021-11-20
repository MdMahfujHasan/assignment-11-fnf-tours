import React from 'react';
import './TopSection.css';

const TopSection = () => {
    return (
        <div>
            <div class="input-group mb-3">
                <input type="text" class="form-control inp" placeholder="Search Places" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-danger" type="button" id="button-addon2"><i class="fas fa-search px-3"></i></button>
            </div>
            <h1><span className="cover-title">FIND A PLACE TO VISIT WITH</span> <br /><span className="cover-title">FRIENDS AND FAMILY.</span></h1>
            <button className="btn btn-primary">TAKE A TOUR</button>
        </div>
    );
};

export default TopSection;