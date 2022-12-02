import React from 'react'
import './index.css';
import { NavLink } from 'react-router-dom';

const midHome = () => {
    return (
        <div className='mid-container'>
            <div>
                <h1 className='text1'>Tired of tedious trip planning ? </h1>
                <p className='text2'>Skip planning with Eat-inerary: hour-by-hour with what </p>
                <p className='text2'>to do and where to eat.</p>
            </div>

            <NavLink to="/destinations"> <button className='Submitbtn'> SEE DESTINATION GUIDES </button> </NavLink>
            <br />
            <div>
                {
                    localStorage.getItem('access_token') !== null ? null
                        : <div >
                            <h4 className='text3'>Already have an account ? <NavLink className="text33" to="/login"> Login </NavLink> </h4>
                        </div>
                }

            </div>
        </div>
    )
}

export default midHome
