import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/NavBar/Navbar';
import Banner from '../pages/Shared/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;