import C from '../../constants';
import { Component } from 'react';

class AllIngredients extends Component {
  constructor ({ingredients, onAddIngredients=f => f }) {
    super({ingredients,onAddIngredients});
  }
  render () {
    const {ingredients, onAddIngredients} = this.props;
    return (
      <div className='all-ingredients'>
        <h1>All Ingredients</h1>
        <ul>
          {ingredients.map((ingredient, i) => <li key={i}>
                                                {ingredient.name}
                                              </li>)}
        </ul>
      </div>
    );
  }
}

export default AllIngredients;
