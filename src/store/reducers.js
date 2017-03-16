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

export const ingredientSelected = (state = null , action) => action.type == C.SELECT_INGREDIENT ?
  action.payload :
  state;

export default combineReducers(
  {
  allIngredients,ingredientSelected}
);
