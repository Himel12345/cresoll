import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Shared/Navigation/Navigation';
import Banner from '../pages/Shared/Banner/Banner';
import Catagory from '../pages/Shared/Catagory/Catagory';


const Main = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        
        scrollRef.current = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true
        });

        
        return () => {
            if (scrollRef.current) {
                scrollRef.current.destroy();
            }
        };
    }, []);

    return (
        <div id='main' >
            <Navigation></Navigation>
            <Banner></Banner>
            <Catagory></Catagory>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;

