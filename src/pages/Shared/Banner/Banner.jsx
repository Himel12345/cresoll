import React from 'react';
import "./Banner.css"
import bannerimg from "../../../assets/banner/bannerimg.jpg"
const Banner = () => {
    return (
        <div className='bg'>
            <h1>CHANGE <br></br><span className='look'>THE LOOK</span> </h1>
            <div className='banner-img'>
              
                <img src={bannerimg} alt="" />
                </div>
        </div>
    );
};

export default Banner;