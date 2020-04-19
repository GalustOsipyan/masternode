import React from 'react';
import { Img } from '../../../../UI/Img';

const CurrencyInfoTableLink = ({ icon, text, url }) => {
  return (
    <a href={ url }
       target='_blank'
       rel="noopener"
       className="CurrencyInfoTable__block d-flex align-items-center">
      <div className='CurrencyInfoTable__block__icon-wrap d-flex align-items-center'>
        <Img src={ icon }/>
      </div>
      <p>{ text }</p>
    </a>
  );
};

export default CurrencyInfoTableLink;
