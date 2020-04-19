import React from 'react';
import { Img } from '../../UI/Img';
import BitcoinIconBig from '../../../assets/icons/bitcoin-icon-big.png';
import './CurrencyInfoListItemCollapsibleContent.scss';
// import StarIcon from '../../../assets/icons/star-icon.png';
import CurrencyInfoTable from './CurrencyInfoTable/CurrencyInfoTable';
import { connect } from 'react-redux';

const CurrencyInfoListItemCollapsibleContent = ({ linkTablesInfo }) => {
  return (
    <div className='CurrencyInfoListItemCollapsibleContent__leftside d-flex'>

      <div className='table-logo-container d-flex flex-column align-items-center'>
        <div className="table-currency-image">
          <Img src={ BitcoinIconBig }/>
        </div>

        <h2 className="table-currency-name">
          Bitcoin token <span>(BTCT)</span>
        </h2>
      </div>

      { linkTablesInfo.map(({ heading, id, linkTableBlockInfo }) => (
        <CurrencyInfoTable
          key={ id }
          link={ true }
          heading={ heading }
          tableBlockInfo={ linkTableBlockInfo }
        />
      )) }

    </div>
  );
};

const mapState = ({ dataReducer }) => ({
  linkTablesInfo: dataReducer.linkTablesInfo
});

export default connect(mapState)(CurrencyInfoListItemCollapsibleContent);
