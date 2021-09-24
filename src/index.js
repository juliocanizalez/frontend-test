import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@nextui-org/react';
import { Provider } from 'react-redux';

import App from './views/App';
import { Store } from './utils/store';

ReactDOM.render(
  <Provider store={Store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);
