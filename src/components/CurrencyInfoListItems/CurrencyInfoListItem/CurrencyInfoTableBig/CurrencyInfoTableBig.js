import React from 'react';
import './CurrencyInfoTableBig.scss';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';

const CurrencyInfoTableBig = ({ tableData }) => {
  
  const { bigTableData: { heading } } = tableData;
  const { specificationsDataList } = tableData;

  return (
    <div className='CurrencyInfoTableBig'>
      <CurrencyInfoTableHeading heading={ heading }/>

      <div className='currency-info-table-wrap'>
        { specificationsDataList.map((text, idx) => (
          <CurrencyInfoTableBlock key={ idx } text={ text }/>
        )) }
      </div>

    </div>
  );
};


export default CurrencyInfoTableBig;
