import React, { Suspense, lazy } from 'react';
import { DashboardNavbar } from '../DashboardNavbar';
import './DashboardContent.scss';
import { Route, Switch } from 'react-router-dom';
import { SearchInput } from '../SearchInput';
import { CurrencyToggleButton } from '../CurrencyToggleButtons/CurrencyToggleButton';

import ArrowToggleIcon from '../../assets/icons/currency-arrow-toggle-icon.png';

const MasternodeRank = lazy(() => import('../../views/MasternodeRank'));
const SharedMasternode = lazy(() => import('../../views/SharedMasternode'));

export const DashboardContent = ({ children }) => {


  return (
    <div className='DashboardContent'>
      {/*<DashboardNavbar/>*/ }
      {/*<SearchInput/>*/ }
      {/*  <div className='currency-toggle-section d-flex justify-content-between align-items-center'>
        { new Array(3).fill(1).map((it, i) => (
          <CurrencyToggleButton
            key={ i }
            text='Coin name'
            src={ ArrowToggleIcon }
          />
        )) }

        <div className="progress-text">
          Progress
        </div>

        { new Array(5).fill(2).map((it, i) => (
          <CurrencyToggleButton
            key={ i }
            text='Coin name'
            src={ ArrowToggleIcon }
          />
        )) }

      </div>*/ }
      {/* <Switch>
        <Route path='/' component={ MasternodeRank }/>
        <Route path='/shared-masternode' component={ SharedMasternode }/>
      </Switch>*/ }

      { children }
    </div>
  );
};

