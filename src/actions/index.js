import C from '../constants';

export const addIngredient = (name,background) => ({
  type: C.ADD_INGREDIENT,
  payload: {
    name: name,
    background: background
  }
});

export const selectIngredient = index => ({
  type: C.SELECT_INGREDIENT,
  payload: index
});
