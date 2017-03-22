import C from '../constants';
import { combineReducers } from 'redux';

export const allIngredients = (state = [] , action) => {
  console.log(action.type);
  switch (action.type) {
    case C.ADD_INGREDIENT:
      return [
        ...state,
        action.payload
      ];
    case C.RECEIVE_INGREDIENTS:
      console.log('payload',action.payload)
      return action.payload;
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
