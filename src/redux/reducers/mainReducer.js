import actionTypes from '../actionTypes';

const initialState = {
  list: [],
};

let id = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD: {
      const {data} = action.payload;
      console.log(data);
      data.id = id++;
      data.isSelected = false;
      return {
        ...state,
        list: [...state.list, data],
      };
    }
    case actionTypes.UPDATE_ITEM: {
      const {item} = action.payload;
      // console.log('reducer', item);
      const updatedList = state.list.map(val => {
        if (val.id === item.id) {
          return item;
        }
        return val;
      });
      // console.log('NEW LIST ', updatedList);
      return {
        ...state,
        list: updatedList,
      };
    }
    case actionTypes.DELETE_ITEM: {
      const {id} = action.payload;
      console.log('reducer', id);
      const updatedList = state.list.filter(val => val.id !== id);
      console.log(updatedList);
      return {
        ...state,
        list: updatedList,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
