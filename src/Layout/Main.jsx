import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Shared/Navigation/Navigation';
import Banner from '../pages/Shared/Banner/Banner';
import Catagory from '../pages/Shared/Catagory/Catagory';
import Social from '../pages/Shared/Social/Social';


const Main = () => {
    useEffect(() => {
        let scrollInstance = null;

        const initScroll = () => {
            scrollInstance = new LocomotiveScroll({
                el: document.querySelector('#main'),
                smooth: true,
                // Add any other configuration options you need
            });
        };

        const destroyScroll = () => {
            if (scrollInstance) {
                scrollInstance.destroy();
                scrollInstance = null;
            }
        };

        initScroll();

        return () => {
            destroyScroll();
        };
    }, []);
    return (
        <div id='main' >
            <Navigation></Navigation>
            <Banner></Banner>
            <Catagory></Catagory>
            <Social></Social>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;

