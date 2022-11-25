import React from 'react'
import './index.css'
import { useFormik } from 'formik';
import * as yup from 'yup';




// const validate = values => {
//     const errors = {};


//     if (!values.firstName) {
//         errors.firstName = 'required';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 character or less'
//     }
//     if (!values.lastName) {
//         errors.lastName = 'required';
//     } else if (values.lastName.length > 15) {
//         errors.lastName = 'Must be 15 character or less'
//     }
//     if (!values.email) {
//         errors.email = 'required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors
// }







const NewForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: yup.object({
            firstName: yup.string().max(15, 'Must be 15 character or less').required('Required'),
            lastName: yup.string().max(20, 'Must contain 20 character or less').required('Required'),
            email: yup.string().email('Invalid Email Address').required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })




    return (
        <div className='new-container'>
            <h4>NEW FORM</h4>


            <form onSubmit={formik.handleSubmit}>
                <label>First Name</label>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />


                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <br />

                <label>Last Name</label>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
                <br />

                <label>Email Address</label>
                <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}




                <br />
                <button type='submit'>SUBMIT</button>

            </form>




        </div>
    )
}

export default NewForm
