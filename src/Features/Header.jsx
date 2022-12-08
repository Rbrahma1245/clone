import React, { useContext } from 'react';
import './index.css';
import logo from '../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import Logout from '../Forms/Logout/Logout';
import Profile from '../Components/Profile';
import { UserContext } from '../App';

const Header = () => {
    
    const userData = useContext(UserContext);


    // console.log("user", userData)


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

                <div>
                    {userData ? <Logout />
                        : <div >
                            <NavLink to="/signup">  SIGN UP </NavLink>
                            <NavLink to="/login">  LOGIN </NavLink>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}





export default Header
