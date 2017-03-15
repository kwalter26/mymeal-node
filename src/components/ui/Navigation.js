import { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';

export default class Navigation extends Component {
  constructor(){
      super()
  }
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>
              <Glyphicon glyph='apple' /> My Meal</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
};
