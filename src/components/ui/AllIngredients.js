import C from '../../constants';
import { Component } from 'react';
import { Table } from 'react-bootstrap';

class AllIngredients extends Component {
  constructor ({ingredients, onAddIngredients=f => f }) {
    super(ingredients,onAddIngredients);
  }
  render () {
    const {ingredients, onAddIngredients} = this.props;
    return (
      <div className='all-ingredients'>
        <h1>All Ingredients</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, i) => {
               return (
                 <tr key={i}>
                   <td>
                     {i}
                   </td>
                   <td>
                     {ingredient.name}
                   </td>
                 </tr>
             
               );
             })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AllIngredients;
