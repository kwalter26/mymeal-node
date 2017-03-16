import { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class Dashboard extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12}>
          <Jumbotron>
            <h1>Dashboard</h1>
          </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
};
