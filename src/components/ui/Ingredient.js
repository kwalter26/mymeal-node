import { ListGroupItem } from 'react-bootstrap';

const Ingredient = ({index, name, onSelectIngredient=f => f }) => {
  return (
    <ListGroupItem onClick={()=>onSelectIngredient(index)}>
      {name}
    </ListGroupItem>
  );
};


export default Ingredient;
