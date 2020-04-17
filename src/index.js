import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './index.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Store/rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const App = lazy(() => import('./App'));

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
  <React.StrictMode>
    <Provider store={ store }>
      <Router basename='/'>
        <Suspense fallback={ <Loader/> }>
          <Route path={ `${ process.env.PUBLIC_URL }/` } component={ App }/>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));

serviceWorker.unregister();
