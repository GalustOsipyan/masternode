import React from 'react';
import './TableMasternode.scss';
import { connect } from 'react-redux';
import CurrencyInfoTableHeading from '../CurrencyInfoTableHeading/CurrencyInfoTableHeading';
import CurrencyInfoTableBlock from '../CurrencyInfoTableBlock/CurrencyInfoTableBlock';

const TableMasternode = ({ masternodeData }) => {
  return (
    <div className='TableMasternode d-flex'>
      <div className='masternode-btns-wrap d-flex flex-column justify-content-between'>
        <button>Share masternode</button>
        <button>Masternode hosting</button>
      </div>

      { masternodeData.map(({ id, heading, dataList }) => (
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
  masternodeData: dataReducer.masternodeData
});


export default connect(mapState)(TableMasternode);
