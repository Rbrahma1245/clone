import React from 'react'
import { userData } from '../App'


const Profile = () => {




    return (
        <div className='container-profile'>
            <userData.Consumer>
                {(currData) => {
                    console.log(currData)
                    return (
                        <div>
                            <p>Your Email :  {currData.email}</p>
                            <p>Your ID :  {currData.id}</p>
                            <p>Created At :  {currData.created.slice(0, 10)}</p>
                        </div>
                    )
                }}
            </userData.Consumer>
        </div>
    )
}

export default Profile
