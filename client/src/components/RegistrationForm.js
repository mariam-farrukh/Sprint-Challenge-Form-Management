import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";

const RegistrationForm = ({errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    }, [status]);

    return (
        <div className='container'>
            <div className='registration-form'>
                <h1>Sign Up</h1>
                <Form>
                    <Field type="text" name="username" placeholder="Username"/>
                        {touched.username && errors.username && (
                            <p className="error">{errors.username}</p>
                        )}

                    <Field type="password" name="password" placeholder="Password"/>
                        {touched.password && errors.password && 
                            (<p className="error">{errors.password}</p>)}

                    <button type="submit">Submit</button>
                </Form>
            </div>
        </div>
    );
};

const FormikRegistrationForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Enter your username'),
        password: Yup.string().min(5, "Password must be 5 characters or longer").required("Password is required"),
    }),

    handleSubmit(values, { setStatus }) {
        axios
          .post('http://localhost:5000/api/register', values)
          .then(res => {
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
    }
})(RegistrationForm);

export default FormikRegistrationForm;