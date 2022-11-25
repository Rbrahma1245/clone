import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import discount from '../../Assets/Images/discount.png';
import './index.css';
import axios from 'axios'
import { useFormik } from 'formik';
import * as yup from 'yup';


const SignUP = () => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            userName: yup.string().max(15, 'Must be 15 character or less').required('Required'),
            email: yup.string().email('Invalid Email Address').required('Required'),
            password: yup.string().required("Please provide a valid password"),
        }),
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2));

            try {
                console.log(values)
                const { data } = await axios.post(`https://mamakoo-api.mithyalabs.com/api/users/signupAuth`, values);
                console.log(data)
                alert('Register successfull')

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

                    <h3>Sign Up</h3>
                    <div className='form2'>
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                id='userName'
                                name='userName'
                                placeholder="User Name"
                                className="Text"
                                type='text'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.userName}
                            />
                            {formik.touched.userName && formik.errors.userName ? (
                                <div>{formik.errors.userName}</div>
                            ) : null}
                            <br />
                            <br />

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

                            <button className='submitbtn' type='submit'>SUBMIT</button>
                            <div>
                                <h4>Already have an account ? <NavLink to="/login"> Login </NavLink> </h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default SignUP
