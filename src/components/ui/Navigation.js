import { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, Header, Brand, Glyphicon, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
            <Glyphicon glyph='apple' /> My-Meal
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to='/'>
            <NavItem eventKey={1}>
              Dashboard
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/ingredients'>
            <NavItem eventKey={2}>
              Ingredients
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
};
