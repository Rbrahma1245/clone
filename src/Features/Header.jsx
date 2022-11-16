import React from 'react';
import './index.css';
import logo from '../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='nav'>
            <div >
                <NavLink to="/" >
                    <img src={logo} alt="Logo" />
                </NavLink>
                <NavLink to="/destinations">  DESTINATIONS</NavLink>
                <NavLink to="/about">  ABOUT</NavLink>
            </div>
            <div >
                <NavLink to="/search">  SEARCH</NavLink>
                {/* <NavLink to="/nearby">  NEARBY</NavLink> */}
                <NavLink to="/signup">  SIGN UP</NavLink>
                <NavLink to="/login">  LOGIN</NavLink>
            </div>
        </div >
    )
}





export default Header
