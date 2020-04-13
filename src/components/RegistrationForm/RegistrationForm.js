import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Persist } from 'formik-persist';

import { useHistory } from 'react-router-dom';


export const RegistrationForm = ({ type }) => {


  const { push } = useHistory();


  return (

    <>
      <Formik
        validateOnBlur={ false }
        initialValues={ { email: '', password: '' } }
        validationSchema={ Yup.object({
          email: Yup.string().trim()
            .email('Invalid email address')
            .required('Email field is required'),
          password: Yup.string().trim()
            .max(16, `Password can't be longer than 16 characters`)
            .min(6, `Password should be minimum 6 characters`)
            .required('Text field is required')
        }) }
        onSubmit={ ({ email, password },
                    { setSubmitting, resetForm, setFieldError }) => {

          console.log('submitted');

          push('/');

        } }
      >
        { ({ errors, touched, isValid, handleReset }) => (
          <Form
            className="post_add_form"
          >
            < div className='form-group position-relative mb-5'>
              <label htmlFor="title_field">Email</label>
              <Field
                id="title_field"
                name="email"
                className={ `form-control ${
                  errors.email && touched
                    ? ' is-invalid' : null }` }
              />
              <ErrorMessage component='div' name='email'/>
            </div>

            <div className="form-group position-relative mb-5">
              <label htmlFor="text_field">Password</label>
              <Field
                id="text_field"
                name="password"
                type="password"
                className={ `form-control ${
                  errors.password && touched.password
                    ? ' is-invalid' : null }` }
              />
              <ErrorMessage component="div" name="password"/>
            </div>

            <button
              disabled={ !isValid }
              type="submit"
              className="btn btn-danger"
            >
              { type }
            </button>


            <Persist name="register-form"/>
          </Form>
        ) }

      </Formik>
    </>

  );
};


