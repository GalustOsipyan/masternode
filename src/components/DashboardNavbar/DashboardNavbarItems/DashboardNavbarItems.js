import React from 'react';
import { connect } from 'react-redux';

const DashboardNavbarItems = ({ navbarData }) => {
  return (
    <>
      { navbarData.map(({ id, numberInfo, title, textInfo }) => (
        <div key={ id } className="d-flex align-items-center">
          <h2 className="quantity">
            { numberInfo }
          </h2>
          <div className="info">
            <h3>{ title }</h3>
            <h5>{ textInfo }</h5>
          </div>
        </div>
      )) }
    </>
  );
};

const mapState = ({ dataReducer }) => ({
  navbarData: dataReducer.navbarData
});

export default connect(mapState)(DashboardNavbarItems);
