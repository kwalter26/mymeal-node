import { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

const IngredientView = ({name,background}) => {
  return (
    <Jumbotron style={{backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
      <h1>{name}</h1>
    </Jumbotron>
  );
};
export default IngredientView;
