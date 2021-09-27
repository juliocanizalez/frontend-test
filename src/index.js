import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './views/App';
import reducer from './utils/reducers';
import { setFood } from './utils/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(setFood());

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);
