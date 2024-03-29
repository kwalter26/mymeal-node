import AllIngredients from '../ui/AllIngredients';
import { connect } from 'react-redux';
import { addIngredient, selectIngredient } from '../../actions';

const mapStateToProps = state => ({
  ingredients: state.allIngredients,
  ingredientSelected: state.ingredientSelected
});

const mapDispatchToProps = dispatch => ({
  onAddIngredient(name,background) {
    dispatch(
      addIngredient(name,background)
    );
  },
  onSelectIngredient(index) {
    dispatch(
      selectIngredient(index)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllIngredients);
