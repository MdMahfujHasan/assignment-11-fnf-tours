import React from 'react';
import './Gallery.css';
import Navbar from './../../Components/Navbar/Navbar';
import GalleryPhotos from './../GalleryPhotos/GalleryPhotos';
import Footer from './../Footer/Footer';

const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>
            <GalleryPhotos></GalleryPhotos>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;