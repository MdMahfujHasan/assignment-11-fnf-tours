import React from 'react';
import './FrontCover.css';
import Navbar from './../../Components/Navbar/Navbar';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TopSection from '../TopSection/TopSection';
import MostPopularTours from '../MostPopularTours/MostPopularTours';
import Footer from '../Footer/Footer';
import ShopItems from '../ShopItems/ShopItems';
import GalleryPhotos from '../GalleryPhotos/GalleryPhotos';

const FrontCover = () => {
    return (
        <div className="front-cover">
            <Navbar></Navbar>
            <TopSection></TopSection>
            <WhyChooseUs></WhyChooseUs>
            <MostPopularTours></MostPopularTours>
            <ShopItems></ShopItems>
            <GalleryPhotos></GalleryPhotos>
            <Footer></Footer>
        </div>
    );
};

export default FrontCover;