import C from '../../constants';
import { Table, Row, Col, Grid, Panel, ListGroup, Button } from 'react-bootstrap';
import Ingredient from './Ingredient';
import IngredientView from './IngredientView';

const AllIngredients = ({ingredients, ingredientSelected, onAddIngredient=f=>f, onSelectIngredient=f => f }) => {
  return (
    <div className='all-ingredients'>
      <Grid>
        <Row>
          <Col xs={3} sm={3}>
          <Panel header='Ingredients' footer={<Button bsStyle="primary">Add</Button>}>
            <ListGroup fill>
              {ingredients.map((ingredient, i) => {
                 return (
                   <Ingredient {...ingredient} index={i} key={i} onSelectIngredient={onSelectIngredient} />
                 );
               })}
            </ListGroup>
          </Panel>
          </Col>
          <Col xs={9} sm={9}>
          <IngredientView {...ingredients[ingredientSelected]}  />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};


export default AllIngredients;
