import React, { useEffect } from 'react'
import './index.css';
import axios from 'axios';




const Logout = () => {










    const handleLogout = async () => {



        window.localStorage.removeItem('ID');
        window.location.replace('/');
    }


    return (
        <div>


            { }
            <button className='logoutbtn' onClick={handleLogout}>LOG OUT</button>


        </div>
    )
}

export default Logout
