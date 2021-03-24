import store from '../store';
import types from '../actionTypes';

const {dispatch} = store;

export function add(data) {
  dispatch({
    type: types.ADD,
    payload: {
      data,
    },
  });
}
