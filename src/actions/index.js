import C from '../constants';

export const addIngredient = name => ({
  type: C.ADD_INGREDIENT,
  payload: {
    name: name
  }
});

export const selectIngredient = index => ({
  type: C.SELECT_INGREDIENT,
  payload: index
});
