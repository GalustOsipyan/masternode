import React from 'react';
import { Img } from '../../../UI/Img';
import './CurrencyBlockLinksTable.scss';
import CurrencyLinkTable from '../CurrencyInfoTable/CurrencyLinkTable';
import { connect } from 'react-redux';

const CurrencyBlockLinksTable = ({ currencyLogoAndName: { currencyLogo, currencyName, currencyAbbreviation }, linkTablesInfo }) => {

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
        <CurrencyLinkTable
          key={ id }
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

export default connect(mapState)(CurrencyBlockLinksTable);
