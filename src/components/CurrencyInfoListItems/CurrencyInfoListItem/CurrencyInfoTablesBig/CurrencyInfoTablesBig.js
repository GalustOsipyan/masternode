import React from 'react';
import CurrencyInfoTableBig from '../CurrencyInfoTableBig/CurrencyInfoTableBig';
import { connect } from 'react-redux';
import './CurrencyInfoTablesBig.scss';

const CurrencyInfoTablesBig = ({ specificationsData }) => {
  return (
    <div className='CurrencyInfoTablesBig d-flex '>
      { specificationsData.map((tableData, i) => (
        <CurrencyInfoTableBig key={ i } tableData={ tableData }/>
      )) }
    </div>
  );
};

const mapState = ({ dataReducer }) => ({

  specificationsData: dataReducer.specificationsData,

});


export default connect(mapState)(CurrencyInfoTablesBig);
