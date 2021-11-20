import React from 'react';
import './GalleryPhotos.css';
import vegatable1 from './../../images/vegatable-1.jpg'
import vegatable2 from './../../images/vegatable-2.jpg'
import vegatable3 from './../../images/vegatable-3.jpg'
import vegatable4 from './../../images/vegatable-4.jpg'

const GalleryPhotos = () => {
    return (
        <div>
            <h1 id="gallery-title">GALLERY</h1>
            <div className="vegatables">
                <div className="vegatable">
                    <img height="225px" width="350px" src={vegatable1} alt="" />
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque consequuntur explicabo rerum commodi nemo vel! Nulla provident, at quod modi voluptate, impedit officiis expedita totam quisquam odio itaque commodi.</p>
                    <div className="reactions">
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-share"></i>
                    </div>
                </div>
                <div className="vegatable">
                    <img height="225px" width="275px" src={vegatable2} alt="" />
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque consequuntur explicabo rerum commodi nemo vel! Nulla provident, at quod modi voluptate, impedit officiis expedita totam quisquam odio itaque commodi.</p>
                    <div className="reactions">
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-share"></i>
                    </div>
                </div>
                <div className="vegatable">
                    <img height="275px" width="350px" src={vegatable3} alt="" />
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque consequuntur explicabo rerum commodi nemo vel! Nulla provident, at quod modi voluptate, impedit officiis expedita totam quisquam odio itaque commodi.</p>
                    <div className="reactions">
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-share"></i>
                    </div>
                </div>
                <div className="vegatable">
                    <img height="300px" width="300px" src={vegatable4} alt="" />
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque consequuntur explicabo rerum commodi nemo vel! Nulla provident, at quod modi voluptate, impedit officiis expedita totam quisquam odio itaque commodi.</p>
                    <div className="reactions">
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-share"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPhotos;