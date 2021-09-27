import { SET_PREPARE, SET_DONE, SET_FOOD, SET_FOOD_DONE } from './actionTypes';
import axios from 'axios';

export const setPrepare = (payload) => ({
  type: SET_PREPARE,
  payload,
});

export const setFood = (payload) => {
  axios.get(process.env.REACT_APP_API_URL).then((food) => {
    //add some timeout to see loading
    setTimeout(() => {
      payload({
        type: SET_FOOD_DONE,
        payload: food,
      });
    }, 500);
  });
  return {
    type: SET_FOOD,
    payload,
  };
};

export const setDone = (payload) => ({
  type: SET_DONE,
  payload,
});
