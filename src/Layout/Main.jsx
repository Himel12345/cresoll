import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';
import Navigation from '../pages/Shared/Navigation/Navigation';

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
            <Outlet></Outlet>
        </div>
    );
};

export default Main;

