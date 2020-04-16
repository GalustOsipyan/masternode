import React from 'react';
import { Img } from '../../UI/Img';

import './CurrencyToggleButton.scss';

export const CurrencyToggleButton = ({ text, icon }) => {


  return (
    <button
      className='CurrencyToggleButton d-flex justify-content-center align-items-center'
    >
      <span>{ text }</span>
      <Img src={ icon }/>
    </button>
  );
};


