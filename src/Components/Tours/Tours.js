import React from 'react';
import './Tours.css';
import Navbar from './../../Components/Navbar/Navbar';
import MostPopularTours from './../MostPopularTours/MostPopularTours';
import Footer from '../Footer/Footer';

const Tours = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MostPopularTours></MostPopularTours>
            <Footer></Footer>
        </div>
    );
};

export default Tours;