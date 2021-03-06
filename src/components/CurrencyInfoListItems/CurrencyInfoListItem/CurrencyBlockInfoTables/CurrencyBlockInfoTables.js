import React from 'react';
import CurrencyLinkTable from '../CurrencyInfoTable/CurrencyLinkTable';
import { connect } from 'react-redux';

const CurrencyBlockInfoTables = ({ specificationsData }) => {

  const { coinSpecifications: { heading } } = specificationsData;

  return (
    <div className='CurrencyBlockLinksTable__leftside d-flex'>

      { specificationsData.map(({ heading, id, linkTableBlockInfo }) => (
        <CurrencyLinkTable
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
  specificationsData: dataReducer.specificationsData
});

export default connect(mapState)(CurrencyBlockInfoTables);
