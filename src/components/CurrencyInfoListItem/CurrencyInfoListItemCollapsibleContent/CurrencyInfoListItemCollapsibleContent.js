import React from 'react';
import { Img } from '../../UI/Img';
import BitcoinIconBig from '../../../assets/icons/bitcoin-icon-big.png';
import './CurrencyInfoListItemCollapsibleContent.scss';
import StarIcon from '../../../assets/icons/star-icon.png';

const CurrencyInfoListItemCollapsibleContent = () => {
  return (
    <div className='CurrencyInfoListItemCollapsibleContent__leftside d-flex'>

      <div className='table-container d-flex flex-column align-items-center'>
        <div className="table-currency-image">
          <Img src={ BitcoinIconBig }/>
        </div>

        <h2 className="table-currency-name">
          Bitcoin token <span>(BTCT)</span>
        </h2>
      </div>


      <div className='table-container'>
        <div className="table-heading-block d-flex justify-content-center align-items-center">
          <h4>Official Links</h4>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>
      </div>

      <div className='table-container'>
        <div className="table-heading-block d-flex justify-content-center align-items-center">
          <h4>Official Links</h4>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>
      </div>

      <div className='table-container'>
        <div className="table-heading-block d-flex justify-content-center align-items-center">
          <h4>Official Links</h4>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>

        <div className="table-block d-flex align-items-center">
          <div className='table-block__icon-wrap d-flex align-items-center'>
            <Img src={ StarIcon }/>
          </div>
          <p>Website</p>
        </div>
      </div>


    </div>
  );
};

export default CurrencyInfoListItemCollapsibleContent;
