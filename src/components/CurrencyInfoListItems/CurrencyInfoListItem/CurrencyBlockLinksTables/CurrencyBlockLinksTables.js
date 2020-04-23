import React from 'react';
import { Img } from '../../../UI/Img';
import './CurrencyBlockLinksTables.scss';
import CurrencyInfoTable from '../CurrencyInfoTable/CurrencyInfoTable';
import { connect } from 'react-redux';

const CurrencyBlockLinksTables = ({ currencyLogoAndName: { currencyLogo, currencyName, currencyAbbreviation }, linkTablesInfo }) => {

  return (
    <div className='CurrencyBlockLinksTable__leftside d-flex'>

      <div className='table-logo-container d-flex flex-column align-items-center'>
        <div className="table-currency-image">
          <Img src={ currencyLogo }/>
        </div>

        <h2 className="table-currency-name">
          { currencyName } <span>{ currencyAbbreviation }</span>
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
  linkTablesInfo: dataReducer.linkTablesInfo,
  currencyLogoAndName: dataReducer.currencyLogoAndName,
});

export default connect(mapState)(CurrencyBlockLinksTables);
