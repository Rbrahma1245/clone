import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import discount from '../../Assets/Images/discount.png';
import './index.css';
import axios from 'axios'

import { API } from '../../vars.js'





const SignUP = () => {






    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // const [userData, setUserData] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // })







    const handleSubmit = async (e) => {
        console.log(`Username : ${username}   Email :  ${email}  password : ${password}`)
        e.preventDefault();


        const userData = {
            username: username,
            email: email,
            password: password
        }

        console.log(userData)

        try {
            // const { data } = await axios.post(API + 'auth/local/register', userData);
            const { data } = await axios.post(`https://mamakoo-api.mithyalabs.com/api/users/signupAuth`, userData);



            console.log(data)
            alert('Register successfull')
            setUsername('')
            setEmail('')
            setPassword('')



        } catch (err) {
            console.log(err);
        }
    }








    return (
        <div style={{ height: 800 }}>
            <div className="container1">
                <img src={discount} alt="Logo" style={{ width: 280 }} />

                <div className="form1">

                    <h3>Sign Up</h3>
                    <div className='form2'>

                        <div>
                            <input type='text' value={username} placeholder="Name" className="Text" onChange={(e) => setUsername(e.target.value)} />
                            <br />
                            <br />
                            <input type='text' value={email} placeholder="Email" className="Text" onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <br />
                            <input type='password' value={password} placeholder="Password" className="Text" onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <br />
                            <button className='submitbtn' onClick={handleSubmit}> SUBMIT </button>
                            <br />
                            <br />
                            <div>
                                <h4>Already have an account ? <NavLink to="/login"> Login </NavLink> </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}


export default SignUP
