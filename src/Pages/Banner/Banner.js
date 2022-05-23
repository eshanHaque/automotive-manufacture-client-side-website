import React from 'react';
import img1 from '../../Images/caros1.jpg';
import img2 from '../../Images/caros2.jpg';


const Banner = () => {
    return (
        <div>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={img1} alt="Factory" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="Factory" />
                </div>
            </div>
        </div>
    );
};

export default Banner;