import C from '../constants';
import { combineReducers } from 'redux';

export const allIngredients = (state = [] , action) => {
  switch (action.type) {
    case C.ADD_INGREDIENT:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default combineReducers(
  {
  allIngredients}
);
