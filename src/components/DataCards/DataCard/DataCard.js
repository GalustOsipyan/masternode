import React from 'react';
import './DataCard.scss';
import { Img } from '../../UI/Img';
import RKTLogo from '../../../assets/images/RKT-big.png';
import PercentageImage from '../../../assets/images/percentage_image.png';

const DataCard = () => {
  return (
    <div className='DataCard'>
      <div className="top-content d-flex align-items-center">
        <Img src={ RKTLogo }/>
        <h4>Rocket Fund (RKT)</h4>

        <div className="roi-info d-flex justify-content-center align-items-center">
          <p>ROI: 2,896%</p>
        </div>
      </div>

      <div className="worth-info d-flex align-items-center">
        <p>MN worth / 7,703.22 USD</p>
      </div>

      <div className="graphic-content d-flex">

        <div className="percentage d-flex justify-content-center align-items-center">
          <Img src={ PercentageImage }/>
        </div>

        <div className="percentage-info d-flex flex-column">
          <h4 className='text-uppercase'>Reward monthly</h4>
          <p>18,588.30 USD</p>

          <h4 className='text-uppercase'>Reward daily</h4>
          <p>611.122 USD</p>

          <h4 className='text-uppercase'>fee</h4>
          <p>2%</p>

        </div>
      </div>

      <div className='number-info-wrap d-flex flex-column justify-content-center align-items-center'>
        <div className="number-info d-flex justify-content-center align-items-center">
          <p>4</p>
        </div>

        <p className='number-info-text'>Total MN running</p>
      </div>

      <div className="card-btn-wrap d-flex  justify-content-center align-items-center">
        <button className='d-flex  justify-content-center align-items-center'>Buy Share</button>
      </div>

    </div>
  );
};

export default DataCard;
