import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Persist } from 'formik-persist';
import '../RegistrationForm/RegistrationForm.scss';
import './LoginForm.scss';
import { Link, useHistory } from 'react-router-dom';


export const LoginForm = ({ type }) => {


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
        }) }
        onSubmit={ ({ email, password },
                    { setSubmitting, resetForm, setFieldError }) => {

          console.log('Logged in');

          push('/dashboard/masternode-rank');

        } }
      >
        { ({ errors, touched, isValid, handleReset }) => (
          <Form
            className="RegistrationForm LoginForm"
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

              <Link to={ `${ process.env.PUBLIC_URL }/` } className='forgot-password-link'>Forgot password?</Link>
            </div>

            <div className='registration-button-wrap d-flex justify-content-between flex-column'>
              <button
                disabled={ !isValid }
                type="submit"
                className="btn form-button form-button--login"
              >
                Sign In
                { type }
              </button>

              <p className='text-center'>
                <span>Not registered?</span>
                <Link to={ `${ process.env.PUBLIC_URL }/registration` }>Create account</Link>
              </p>
            </div>


            <Persist name="login-form"/>
          </Form>
        ) }

      </Formik>
    </>

  );
};


