import React from 'react';
import ReactDOM from 'react-dom';
import PortalApp from './components/portalClient';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import store from './store'
import {Provider} from 'react-redux';

import './assets/fonts/index.css';

ReactDOM.render(
    <Provider store={store}>
      <PortalApp />
    </Provider>,
  document.getElementById('app')
);
