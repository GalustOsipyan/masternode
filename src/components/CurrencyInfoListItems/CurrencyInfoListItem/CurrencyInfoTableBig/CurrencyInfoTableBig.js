import React from 'react';
import './CurrencyInfoTableBig.scss';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';

const CurrencyInfoTableBig = ({ heading }) => {
  return (
    <div className='CurrencyInfoTableBig'>
      <CurrencyInfoTableHeading heading={ heading }/>

      
      <CurrencyInfoTableBlock/>

    </div>
  );
};

export default CurrencyInfoTableBig;
