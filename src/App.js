import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Sidenav } from './components/Sidenav';
import { Navbar } from './components/Navbar';

const RegistrationPage = lazy(() => import('./pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const MasternodeRank = lazy(() => import('./views/MasternodeRank'));
const SharedMasternode = lazy(() => import('./views/SharedMasternode'));
const Faq = lazy(() => import('./views/Faq/Faq'));
const MyMasternodes = lazy(() => import('./views/MyMasternodes/MyMasternodes'));
const MyBalance = lazy(() => import('./views/MyBalance/MyBalance'));
const MyWallets = lazy(() => import('./views/MyWallets/MyWallets'));


const App = () => (
  <>
    <Navbar/>
    <Sidenav/>
    <Suspense fallback={ <Loader/> }>
      <Switch>
        <Route path={ `${ process.env.PUBLIC_URL }/` } component={ MasternodeRank } exact/>
        <Route path={ `${ process.env.PUBLIC_URL }/masternode-rank` } component={ MasternodeRank }/>
        <Route path={ `${ process.env.PUBLIC_URL }/shared-masternode` } component={ SharedMasternode }/>
        <Route path={ `${ process.env.PUBLIC_URL }/faq` } component={ Faq }/>
        <Route path={ `${ process.env.PUBLIC_URL }/my-masternodes` } component={ MyMasternodes }/>
        <Route path={ `${ process.env.PUBLIC_URL }/my-balance` } component={ MyBalance }/>
        <Route path={ `${ process.env.PUBLIC_URL }/my-wallets` } component={ MyWallets }/>
        <Route path={ `${ process.env.PUBLIC_URL }/registration` } component={ RegistrationPage }/>
        <Route path={ `${ process.env.PUBLIC_URL }/login` } component={ LoginPage }/>
        <Redirect to={ `${ process.env.PUBLIC_URL }/` }/>
      </Switch>
    </Suspense>
  </>

);

export default App;
