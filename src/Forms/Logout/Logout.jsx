import React, { useEffect } from 'react'
import './index.css';
import axios from 'axios';




const Logout = (props) => {


    const { values } = props;

    console.log(values)

    useEffect(() => {
        fetchDestinations()
    }, [])


    const fetchDestinations = async () => {


        try {
            const { data } = await axios.get(`https://mamakoo-api.mithyalabs.com/api/users/me `);

            console.log(data)
        }
        catch (error) {
            console.log(error)
        }

    }





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
