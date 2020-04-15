import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './index.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import * as serviceWorker from './serviceWorker';
// import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Loader } from './components/Loader';

const App = lazy(() => import('./App'));

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={ <Loader/> }>
        <Route path='/' component={ App }/>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

render(app, document.getElementById('root'));

serviceWorker.unregister();
