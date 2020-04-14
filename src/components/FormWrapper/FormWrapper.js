import React from 'react';
import './FormWrapper.scss';
import { Img } from '../UI/Img';
import MasternodeLogoBig from '../../assets/icons/masternode-logo-big.png';

export const FormWrapper = ({ topHeading, bottomHading, children }) => {
  return (
    <div className='FormWrapper'>
      <div className='FormWrapper__heading d-flex flex-column align-items-center'>

        <Img src={ MasternodeLogoBig }/>
        <h1>{ topHeading }</h1>
        <h2>{ bottomHading }</h2>
      </div>

      { children }

    </div>
  );
};

