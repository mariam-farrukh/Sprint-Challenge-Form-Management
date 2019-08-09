import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";

function RegistrationForm ({errors, touched, values, status }) {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
      if (status) {
        setMeals([...status]);
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
            <div className="meal-list">
            <h1>Meals</h1>
                {meals ? meals.map(meal => (
                    <p key={Date.now() + Math.random(10000)} className="meals">
                        Name : {meal.name} Course : {meal.course}
                    </p>
                ))
                : null}
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
          .then(res => {console.log(res.data)})
          .catch(err => console.log(err.response));
        axios
          .get("http://localhost:5000/api/restricted/data")
          .then(res => {
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
    }
})(RegistrationForm);

export default FormikRegistrationForm;

export const subtract = (num1, num2) => num1 - num2;