import { keyBy } from 'lodash';

import {
  SET_CLEAR_DONE,
  SET_DONE,
  SET_FOOD,
  SET_FOOD_DONE,
  SET_PREPARE,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  data: {},
  prepare: [],
  done: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return {
        ...state,
      };
    case SET_FOOD_DONE:
      return {
        loading: false,
        data: keyBy(
          action.payload.data.data.map((food) => ({
            ...food,
          })),
          'id'
        ),
        prepare: [],
        done: [],
      };
    case SET_PREPARE:
      return {
        ...state,
        prepare: [...state.prepare, action.payload],
      };
    case SET_DONE:
      return {
        ...state,
        prepare: state.prepare.filter((items) => items.id !== action.payload.id),
        done: [...state.done, action.payload],
      };
    case SET_CLEAR_DONE:
      return {
        ...state,
        done: [],
      };
    default:
      return state;
  }
};

export default reducer;
