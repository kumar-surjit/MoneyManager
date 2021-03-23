import store from '../store';
import types from '../actionTypes';

const {dispatch} = store;

export function add() {
  dispatch({
    type: types.ADD,
    payload: {
      value: 1,
    },
  });
}
