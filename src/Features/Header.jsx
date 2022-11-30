import React from 'react';
import './index.css';
import logo from '../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import Logout from '../Forms/Logout/Logout';

const Header = (props) => {
    const { userInfo } = props

    // console.log(userInfo.email)


    // if ("ID" in localStorage) {
    //     alert('yes');
    // } else {
    //     alert('no');
    // }


    return (
        <div className='nav'>
            <div className='header-first'>
                <div>
                    <NavLink to="/" >
                        <img src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <div >
                    <NavLink to="/destinations">  DESTINATIONS</NavLink>
                    <NavLink to="/about">  ABOUT</NavLink>
                </div>

            </div>
            <div className='header-last'>
                <div > <NavLink to="/search">  SEARCH</NavLink></div>
                {/* <NavLink to="/nearby">  NEARBY</NavLink> */}

                {
                    localStorage.getItem('ID') !== null ? <div >   <Logout userInfo={userInfo} /> </div>
                        : <div >
                            <NavLink to="/signup">  SIGN UP </NavLink>
                            <NavLink to="/login">  LOGIN</NavLink>
                        </div>
                }






            </div>
        </div >
    )
}





export default Header
