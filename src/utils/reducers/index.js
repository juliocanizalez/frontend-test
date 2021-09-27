import { keyBy } from 'lodash';

import { SET_FOOD, SET_FOOD_DONE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return {
        ...state,
        loading: true,
      };
    case SET_FOOD_DONE:
      return {
        ...state,
        loading: false,
        data: keyBy(
          action.payload.data.data.map((food) => ({
            ...food,
            loading: false,
          })),
          'id'
        ),
      };
    default:
      return state;
  }
};

export default reducer;
