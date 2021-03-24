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
      return {
        ...state,
        list: [...state.list, data],
      };
    }
    default:
      return {
        ...state,
      };
  }
}
