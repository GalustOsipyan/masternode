import React from 'react';
import './CurrencyLinkTable.scss';
import CurrencyInfoTableLink from '../CurrencyInfoTableLink/CurrencyInfoTableLink';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';

const CurrencyLinkTable = ({ heading, tableBlockInfo }) => {

  return (
    <div className='CurrencyLinkTable'>
      <CurrencyInfoTableHeading heading={ heading }/>

      { tableBlockInfo.map(({ id, ...props }) => (
        <CurrencyInfoTableLink key={ id } { ...props } />
      )) }

    </div>
  );
};


export default CurrencyLinkTable;
