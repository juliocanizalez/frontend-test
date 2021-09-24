import { createStore } from 'redux';

import useApi from '../hooks/useApi';
import reducer from '../reducers';

export const Store = () => {
  const food = useApi(process.env.REACT_APP_API_URL);
  const store = createStore(reducer, food);
  return store;
};
