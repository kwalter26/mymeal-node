import C from './constants';

export const addIngredient = (name) => {
    return {
        type: C.ADD_INGREDIENT,
        payload: {
            name:name
        }
    }
};
