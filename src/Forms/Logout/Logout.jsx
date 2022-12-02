import React, { useEffect } from 'react'
import './index.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Logout = () => {


    const handleLogout = async () => {
        window.localStorage.removeItem('access_token');
        window.location.replace('/');
    }


    return (
        <div className='container-logout'>
            <div className="dropdown">
                <button className="dropbtn">   </button>
                <div className="dropdown-content">

                    <NavLink to="/profile">  Profile </NavLink>
                    <button className='logoutbtn' onClick={handleLogout}>Logout</button>
                    {/* <a href="#">Log Out</a> */}
                </div>
            </div>
        </div>

    )
}

export default Logout
