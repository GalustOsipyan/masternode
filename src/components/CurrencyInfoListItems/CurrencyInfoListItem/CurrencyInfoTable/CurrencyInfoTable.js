import React from 'react';
import './CurrencyInfoTable.scss';
import CurrencyInfoTableLink from '../CurrencyInfoTableLink/CurrencyInfoTableLink';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';

const CurrencyInfoTable = ({ heading, tableBlockInfo, link }) => {

  return (
    <div className='CurrencyInfoTable'>
      <CurrencyInfoTableHeading heading={ heading }/>

      { link ? tableBlockInfo.map(({ id, ...props }) => (
        <CurrencyInfoTableLink key={ id } { ...props } />

      )) : tableBlockInfo.map(({ id, ...props }) => (
        <CurrencyInfoTableBlock key={ id } { ...props }/>
      )) }

    </div>
  );
};


export default CurrencyInfoTable;
