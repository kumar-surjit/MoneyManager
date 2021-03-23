import actionTypes from '../actionTypes';

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD: {
      const {value} = action.payload;
      return {
        ...state,
        counter: state.counter + value,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
