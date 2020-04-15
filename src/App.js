import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Sidenav } from './components/Sidenav';
import { DashboardNavbar } from './components/DashboardNavbar';

const RegistrationPage = lazy(() => import('./pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const MasternodeRank = lazy(() => import('./views/MasternodeRank'));
const SharedMasternode = lazy(() => import('./views/SharedMasternode'));


const App = () => (
  <>
    <DashboardNavbar/>
    <Sidenav/>
    <Suspense fallback={ <Loader/> }>
      <Switch>
        <Route path='/' component={ MasternodeRank } exact/>
        <Route path='/masternode-rank' component={ MasternodeRank }/>
        <Route path='/shared-masternode' component={ SharedMasternode }/>
        <Route path='/registration' component={ RegistrationPage }/>
        <Route path='/login' component={ LoginPage }/>
      </Switch>
    </Suspense>
  </>

);

export default App;
