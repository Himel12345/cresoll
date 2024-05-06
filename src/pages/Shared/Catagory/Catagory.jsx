import React from 'react';
import './Catagory.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ring from '../../../assets/catagory/ring.jpg'
import braclet from '../../../assets/catagory/braclet.jpg'
import chain from '../../../assets/catagory/chain.jpg'
const Catagory = () => {

    useGSAP(() => {
        gsap.from('.cata-text h1 ', {
            y: 50,
            opacity: 0,
            delay: 0.5,
            duration: 0.9,
            stagger: 0.3
        });
        gsap.from('.cata-text p', {
            y: 50,
            opacity: 0,
            delay: 0.5,
            duration: 0.9,
            stagger: 0.3
        });
    }, []);
    return (
        <div>
            <div className='cata-text'>
                <h1>Adorn yourself in elegance!!</h1>
                <p>Explore Our New Product</p>
            </div>
            <div className='cata-design'>
                <div><p>Buy Good</p></div>
                <div><p>Look Good</p>
                </div>
            </div><hr className='hr' />
            <div className='cata-item'> 
            <div id="elem1" className="elem"><img  src={ring} alt="" /></div>
            <div id="elem2" className="elem"><img src={braclet} alt="" /></div>
            <div id="elem3" className="elem"><img src={chain} alt="" /></div>
            </div>
        </div>
    );
};

export default Catagory;