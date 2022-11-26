import React, { useState } from 'react'
import { NavLink, Router } from 'react-router-dom';
import discount from '../../Assets/Images/discount.png'
import './index.css';
import axios from 'axios'
import { useFormik } from 'formik';
import * as yup from 'yup';




const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid Email Address').required('Required'),
            password: yup.string().required("Please provide a valid password"),
        }),
        onSubmit: async (values) => {
            try {
                console.log(values)
                const { data } = await axios.post(`https://mamakoo-api.mithyalabs.com/api/users/login`, values);
                console.log(data)
                window.localStorage.setItem('ID', data.id)
                alert('Login successfull')
                window.location.replace('/');

            } catch (err) {
                console.log(err);
            }
        }
    })




    return (

        <div style={{ height: 800 }}>
            <div className="container1">
                <img src={discount} alt="Logo" style={{ width: 280 }} />

                <div className="form1">
                    <h3>LogIn</h3>

                    <div className='form2'>
                        <form onSubmit={formik.handleSubmit}>

                            <input
                                id='email'
                                name='email'
                                placeholder="Email"
                                className="Text"
                                type='text'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />

                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                            <br />
                            <br />

                            <input
                                id='password'
                                name='password'
                                placeholder="Password"
                                className="Text"
                                type='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                            <br />
                            <br />

                            <button className='submitbtn' type='submit' >SUBMIT</button>
                            <div>
                                <h4>Don't have account ? <NavLink to="/signup"> Sign Up </NavLink> </h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
