import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Persist } from 'formik-persist';

import './RegistrationForm.scss';

import { Link, useHistory } from 'react-router-dom';


export const RegistrationForm = ({ type }) => {


  const { push } = useHistory();


  return (

    <>
      <Formik
        validateOnBlur={ false }
        initialValues={ { email: '', password: '', confirmPassword: '' } }
        validationSchema={ Yup.object({
          email: Yup.string().trim()
            .email('Invalid email address')
            .required('Email field is required'),
          password: Yup.string().trim()
            .max(16, `Password can't be longer than 16 characters`)
            .min(6, `Password should be minimum 6 characters`)
            .required('Field is required'),
          confirmPassword: Yup.string().when('password', {
            is: val => (!!(val && val.length > 0)),
            then: Yup.string().oneOf(
              [Yup.ref('password')],
              'Both password need to be the same'
            )
              .required('Field is required'),
          })
        }) }
        onSubmit={ ({ email, password },
                    { setSubmitting, resetForm, setFieldError }) => {

          console.log('submitted');

          push('/');

        } }
      >
        { ({ errors, touched, isValid, handleReset }) => (
          <Form
            className="RegistrationForm"
          >
            < div className='form-group position-relative'>
              <label htmlFor="title_field" data-email='email'>Email address</label>
              <Field
                id="title_field"
                name="email"
                className={ `form-control ${
                  errors.email && touched
                    ? ' is-invalid' : null }` }
              />
              <ErrorMessage component='div' name='email'/>
            </div>

            <div className="form-group position-relative">
              <label htmlFor="text_field" data-email='password'>Password</label>
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

            <div className="form-group position-relative">
              <label htmlFor="text_field" data-email='password'>Confirm password</label>
              <Field
                id="text_field"
                name="confirmPassword"
                type="password"
                className={ `form-control ${
                  errors.password && errors.confirmPassword && touched.password
                    ? ' is-invalid' : null }` }
              />
              <ErrorMessage component="div" name="confirmPassword"/>
            </div>

            <div className='registration-button-wrap d-flex justify-content-between align-items-center'>
              <button
                disabled={ !isValid }
                type="submit"
                className="btn form-button form-button--registration"
              >
                Create Account
                { type }
              </button>

              <p>
                <span>Already registered?</span>
                <Link to={ `${ process.env.PUBLIC_URL }/login` }>Sign In</Link>
              </p>
            </div>

            <Persist name="register-form"/>
          </Form>
        ) }

      </Formik>
    </>

  );
};


