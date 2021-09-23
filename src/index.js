import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@nextui-org/react';

import App from './views/App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
