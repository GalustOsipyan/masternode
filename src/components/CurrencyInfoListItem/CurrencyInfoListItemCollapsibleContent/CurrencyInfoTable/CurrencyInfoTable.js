import React from 'react';
import './CurrencyInfoTable.scss';
import CurrencyInfoTableLink from './CurrencyInfoTableLink/CurrencyInfoTableLink';
import CurrencyInfoTableBlock from './CurrencyInfoTableBlock/CurrencyInfoTableBlock';

const CurrencyInfoTable = ({ heading, tableBlockInfo, link }) => {

  // tableBlock = link ?
  return (
    <div className='CurrencyInfoTable'>
      <div className="CurrencyInfoTable__heading-block d-flex justify-content-center align-items-center">
        <h4>{ heading }</h4>
      </div>

      { link ? tableBlockInfo.map(({ id, ...props }) => (
        <CurrencyInfoTableLink key={ id } { ...props } />

      )) : tableBlockInfo.map(({ id, ...props }) => (
        <CurrencyInfoTableBlock key={ id } { ...props }/>
      )) }

    </div>
  );
};


export default CurrencyInfoTable;
