import React from 'react';
import { EmptyLayout } from '../../layouts/EmptyLayout';
import { Img } from '../../components/UI/Img';
import './RegistrationPage.scss';
import MasternodeLogoBig from '../../assets/icons/masternode-logo-big.png';
import { RegistrationForm } from '../../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <EmptyLayout>
      <div className='RegistrationPage-content'>
        <div className='RegistrationPage-content__heading d-flex flex-column align-items-center'>
          <Img src={ MasternodeLogoBig }/>

          <h1>Create account</h1>
          <h2>It's free and easy</h2>
        </div>

        <div className="RegistrationPage-content__form">
          <RegistrationForm/>
        </div>
      </div>
    </EmptyLayout>
  );
};

export default RegistrationPage;
