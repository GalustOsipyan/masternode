import React from 'react';
import './TableRewards.scss';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';
import { connect } from 'react-redux';

const TableRewards = ({ rewardsData }) => {
  return (
    <div className='TableRewards d-flex'>
      { rewardsData.map(({ id, heading, dataList }) => (
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
  rewardsData: dataReducer.rewardsData
});

export default connect(mapState)(TableRewards);
