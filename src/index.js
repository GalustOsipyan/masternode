import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

render(app, document.getElementById('root'));

serviceWorker.unregister();
