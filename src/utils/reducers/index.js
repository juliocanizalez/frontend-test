import { keyBy } from 'lodash';

import { SET_FOOD, SET_FOOD_DONE } from '../actions/actionTypes';

const initialState = {
  loading: true,
  data: {},
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
      };
    default:
      return state;
  }
};

export default reducer;
