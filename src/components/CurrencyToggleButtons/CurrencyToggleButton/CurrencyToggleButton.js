import React from 'react';
import { Img } from '../../UI/Img';

import './CurrencyToggleButton.scss';

export const CurrencyToggleButton = ({ text, src }) => {


  return (
    <button
      className='CurrencyToggleButton'

    >
      <span>{ text }</span>
      <Img src={ src }/>
    </button>
  );
};


