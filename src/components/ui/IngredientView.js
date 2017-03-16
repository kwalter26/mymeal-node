import { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

const IngredientView = ({name}) => {
  return (
    <Jumbotron>
      <h1>{name}</h1>
    </Jumbotron>
  );
};
export default IngredientView;
