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

export function updateItem(item) {
  dispatch({
    type: types.UPDATE_ITEM,
    payload: {
      item,
    },
  });
}

export function deleteItem(id) {
  dispatch({
    type: types.DELETE_ITEM,
    payload: {id},
  });
}

export function filterEnteries(limit) {
  dispatch({
    type: types.FILTER_ITEMS,
    payload: {limit},
  });
}
