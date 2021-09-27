import { SET_PREPARE, SET_DONE, SET_FOOD } from './actionTypes';

export const setPrepare = (payload) => ({
  type: SET_PREPARE,
  payload,
});

export const setFood = (payload) => ({
  type: SET_FOOD,
  payload,
});

export const setDone = (payload) => ({
  type: SET_DONE,
  payload,
});
