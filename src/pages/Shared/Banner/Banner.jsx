import React from 'react';
import "./Banner.css"
import bannerimg from "../../../assets/banner/bannerimg.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Banner = () => {
    useGSAP(()=>{
gsap.from('.bg h1',{
    y:70,
    opacity:0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3
});
gsap.from('.bg .banner-img',{
    scale:0.9,
    opacity:0,
    delay: 1.3,
    duration: 0.5,
   
});

  

    },[]);
    return (
        <div className='bg'>
  <h1 className='we'>WE</h1>
            <h1 className='change'> CHANGE </h1>
            <h1 className='look'>THE LOOK </h1>
            <div className='banner-img'>
                <img src={bannerimg} alt="" />
                </div>
        </div>
    );
};

export default Banner;