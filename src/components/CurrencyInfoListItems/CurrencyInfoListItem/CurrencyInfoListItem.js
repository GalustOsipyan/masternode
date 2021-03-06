import React, { useState } from 'react';
import './CurrencyInfoListItem.scss';
import { Img } from '../../UI/Img';

import CurrencyBlockLinksTable
  from './CurrencyBlockLinksTable/CurrencyBlockLinksTable';
import { connect } from 'react-redux';
import CurrencyInfoTablesBig from './CurrencyInfoTablesBig/CurrencyInfoTablesBig';
import TableRewards from './TableRewards/TableRewards';
import TablePrice from './TablePrice/TablePrice';
import TableMasternode from './TableMasternode/TableMasternode';
import Chart from '../../Chart/Chart';

const CurrencyInfoListItem = ({ currencyLogo, currencyInfoListItemDataLeft, progressPercent, currencyInfoListItemDataRight }) => {

  const [height, setHeight] = useState(false);

  const collapseHandler = () => {
    console.log('collapsed');

    setHeight(!height);

  };

  return (
    <div className='CurrencyInfoListItem-wrap'>
      <div
        className='CurrencyInfoListItem d-flex align-items-center justify-content-between'
        onClick={ collapseHandler }
      >

        <div className='currency-logo d-flex justify-content-center'>
          <Img src={ currencyLogo }/>
        </div>

        { currencyInfoListItemDataLeft.map(({ id, heading, text }) => (
          <div key={ id } className='coin-name d-flex flex-column align-items-center'>
            <h4 className='CurrencyInfoListItem__heading'>{ heading }</h4>
            <p className='CurrencyInfoListItem__info'>{ text }</p>
          </div>
        )) }


        <div className='progress-bar-wrap'>
          <h4 className='text-center'>Progress</h4>
          <div className='progress'>
            <div className='progress-bar' style={ { width: `${ progressPercent }%` } }>
            </div>
          </div>
        </div>

        { currencyInfoListItemDataRight.map(({ id, heading, text }) => (
          <div key={ id } className='price d-flex flex-column align-items-center'>
            <h4 className='CurrencyInfoListItem__heading'>{ heading }</h4>
            <p className='CurrencyInfoListItem__info'>{ text }</p>
          </div>
        )) }

      </div>

      <div className={ `collapsible-area ${ height ? 'show' : '' }` }>

        <div className='collapsible-area__content-top d-flex'>
          <CurrencyBlockLinksTable/>
          <CurrencyInfoTablesBig/>
        </div>

        <div className='collapsible-area__content-bottom d-flex'>
          <div className="table-content-right">
            <TableRewards/>
            <TablePrice/>
            <TableMasternode/>
          </div>

          <div className="table-content-left">
            <Chart/>
          </div>
        </div>

      </div>

    </div>
  );
};

const mapState = ({ dataReducer }) => ({
  currencyLogo: dataReducer.currencyLogo,
  currencyInfoListItemDataLeft: dataReducer.currencyInfoListItemDataLeft,
  progressPercent: dataReducer.progressPercent,
  currencyInfoListItemDataRight: dataReducer.currencyInfoListItemDataRight,
});

export default connect(mapState)(CurrencyInfoListItem);
