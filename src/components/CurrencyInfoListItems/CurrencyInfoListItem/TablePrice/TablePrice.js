import React from 'react';
import './TablePrice.scss';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';
import { connect } from 'react-redux';

const TablePrice = ({ priceData }) => {
  return (
    <div className='TablePrice d-flex'>
      { priceData.map(({ id, heading, dataList }) => (
        <div key={ id } className="TableRewards__item">
          <CurrencyInfoTableHeading heading={ heading }/>

          { dataList.map((text, idx) => (
            <CurrencyInfoTableBlock key={ idx } text={ text }/>
          )) }

        </div>
      )) }
    </div>
  );
};

const mapState = ({ dataReducer }) => ({
  priceData: dataReducer.priceData
});

export default connect(mapState)(TablePrice);
