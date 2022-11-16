import React from 'react'
import { NavLink } from 'react-router-dom';
import discount from '../../Assets/Images/discount.png'
import './index.css';

const Login = () => {





    return (

        <div style={{ height: 800 }}>
            <div className="container1">
                <img src={discount} alt="Logo" style={{ width: 280 }} />

                <div className="form1">
                    <h3>LogIn</h3>

                    <div className='form2'>
                        <div>
                            <input type='text' placeholder="Email" className="Text" />
                            <br />
                            <br />
                            <input type='text' placeholder="Password" className="Text" />
                            <br />
                            <br />
                            <button className='submitbtn'> SUBMIT </button>
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
