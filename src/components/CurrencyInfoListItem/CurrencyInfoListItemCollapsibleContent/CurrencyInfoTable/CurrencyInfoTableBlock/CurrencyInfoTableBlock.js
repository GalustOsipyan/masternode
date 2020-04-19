import React from 'react';
import { Img } from '../../../../UI/Img';

const CurrencyInfoTableBlock = ({ icon, text, }) => {
  return (
    <div
      className="CurrencyInfoTable__block d-flex align-items-center">
      <div className='CurrencyInfoTable__block__icon-wrap d-flex align-items-center'>
        <Img src={ icon }/>
      </div>
      <p>{ text }</p>
    </div>
  );
};

export default CurrencyInfoTableBlock;
