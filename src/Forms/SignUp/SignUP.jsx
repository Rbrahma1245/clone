import React, { useState } from 'react';
// import axios from "axios";
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router";
import discount from '../../Assets/Images/discount.png';
import './index.css';


const SignUP = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [details, setDetails] = useState('')


    const handleSubmit = (e) => {

        if (name === "" || email === "" || password === "") {
            alert("Please filled the required details");
            return false;
        }
        else {

            let all = { name, email, password }
            setDetails([...details, all])
            console.log(details)


        }


        alert('Successfull Login')

        console.log(details)

        console.log(`name : ${name} email : ${email}  password : ${password}`)

    };


    return (
        <div style={{ height: 800 }}>
            <div className="container1">
                <img src={discount} alt="Logo" style={{ width: 280 }} />


                <div className="form1">

                    <h3>Sign Up</h3>
                    <div className='form2'>

                        <div>
                            <input type='text' placeholder="Name" className="Text" name="Name" onChange={(e) => setName(e.target.value)} />
                            <br />
                            <br />
                            <input type='text' placeholder="Email" className="Text" name="Email" onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <br />
                            <input type='password' placeholder="Password" name="Password" className="Text" onChange={(e) => setPassword(e.target.value)} />
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
