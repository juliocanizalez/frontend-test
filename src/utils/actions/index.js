import { SET_PREPARE, SET_DONE, SET_FOOD, SET_FOOD_DONE, SET_CLEAR_DONE } from './actionTypes';
import axios from 'axios';

export const setPrepare = (payload) => ({
  type: SET_PREPARE,
  payload,
});

export const setFood = () => (dispatch) => {
  dispatch({
    type: SET_FOOD,
  });
  axios.get(process.env.REACT_APP_API_URL).then((food) => {
    //add some timeout to see loading
    setTimeout(() => {
      dispatch({
        type: SET_FOOD_DONE,
        payload: food,
      });
    }, 500);
  });
};

export const setDone = (payload) => ({
  type: SET_DONE,
  payload,
});

export const setClear = (payload) => ({
  type: SET_CLEAR_DONE,
  payload,
});
