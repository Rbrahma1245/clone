import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import discount from '../../Assets/Images/discount.png'
import './index.css';
import axios from 'axios'

import { API } from '../../vars.js'



const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')






    const handleSubmit = async (e) => {

        e.preventDefault();


        const userData = {
            email: email,
            password: password
        }

        console.log(userData)

        try {

            const { data } = await axios.post(' https://mamakoo-api.mithyalabs.com/api/users/login', userData)
            alert(' Login success')
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }









    return (

        <div style={{ height: 800 }}>
            <div className="container1">
                <img src={discount} alt="Logo" style={{ width: 280 }} />

                <div className="form1">
                    <h3>LogIn</h3>

                    <div className='form2'>
                        <div>
                            <input type='text' placeholder="Email" className="Text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <br />
                            <input type='text' placeholder="Password" className="Text" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <br />
                            <button className='submitbtn' onClick={handleSubmit}> SUBMIT </button>
                            <br />
                            <br />
                            <div>
                                <h4>Don't have account ? <NavLink to="/signup"> Sign Up </NavLink> </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
