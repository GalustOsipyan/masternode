import React from 'react';
import './SigninSignupButtons.scss';
import SignupIcon from '../../assets/icons/signup-btutton-icon.png';
import { Link } from 'react-router-dom';
import { Img } from '../UI/Img';


export const SigninSignupButtons = () => {
  return (
    <div className='SigninSignupButtons d-flex align-items-center'>
      <Link to={ `${ process.env.PUBLIC_URL }/login` }>Sign In</Link>
      <Link to={ `${ process.env.PUBLIC_URL }/registration` }>
        <Img src={ SignupIcon } alt={ 'sign up button\'s icon' }/>
        Sign Up
      </Link>
    </div>

  );
};

