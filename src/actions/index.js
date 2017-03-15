import C from '../constants';

export const addIngredient = (name) => ({
  type: C.ADD_INGREDIENT,
  payload: {
    name: name
  }
});