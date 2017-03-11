import AllIngredients from '../ui/AllIngredients';
import { connect } from 'react-redux';
import { addIngredient } from '../../actions';

const mapStateToProps = state =>({
    ingredients: state.allIngredients
});

// const mapDispatchToProps = dispatch => ({
//   onAddIngredient(name) {
//     dispatch(
//       addIngredient(name)
//     );
//   }
// });

export default connect(mapStateToProps)(AllIngredients);
