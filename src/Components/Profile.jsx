import React, { useContext } from 'react'
import { UserContext } from '../App'


const Profile = () => {
    const userData = useContext(UserContext);

    return (
        <div className='container-profile'>
            <div>
                <p>Your Email :  {userData.email}</p>
                <p>Your ID :  {userData.id}</p>
                <p>Created At : {userData.created?.slice(0, 10)}</p>
            </div>
        </div>
    )
}

export default Profile
