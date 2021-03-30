import actionTypes from '../actionTypes';
import {getDaysFromNow} from '../../utils/helperFunctions';

const initialState = {
  list: [],
  backUpList: [],
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
        backUpList: [...state.list, data],
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
        backUpList: updatedList,
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
        backUpList: updatedList,
      };
    }
    case actionTypes.FILTER_ITEMS: {
      const {limit} = action.payload;
      const filteredList = state.backUpList.filter(item => {
        if (getDaysFromNow(item.date) <= limit) return item;
      });
      // console.log(filteredList);
      console.log(state.list);
      return {
        ...state,
        list: filteredList,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
