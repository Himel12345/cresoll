import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGripLines } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/logo/logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='nav'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/category">Category</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="nav-icons">
              <Link> <FontAwesomeIcon className='icon1' icon={faGripLines} /></Link> 
              <Link><FontAwesomeIcon className='icon2' icon={faCartShopping} /></Link> 
            </div>
        </div>
    );
};

export default Navigation;
