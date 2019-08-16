import React, { Component } from 'react';
import { Nav, NavItem,  Navbar,  } from 'react-bootstrap';
// import Paper from 'material-ui/Paper';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>



        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Aodh O'Sullivan</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <LinkContainer to="/homePage">
                <NavItem> Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/github">
                <NavItem eventKey={1}>GitHub</NavItem>
              </LinkContainer>
              <LinkContainer to="/p5">
                <NavItem eventKey={2}>P5.js </NavItem>
              </LinkContainer>

              <LinkContainer to="/tracks">
                <NavItem eventKey={3.1}>Tracks</NavItem>
              </LinkContainer>
              <LinkContainer to="/mixing">
                <NavItem eventKey={3.2}>Mixing</NavItem>
              </LinkContainer>
              <LinkContainer to="/sets">
                <NavItem eventKey={3.3}>Sets</NavItem>
              </LinkContainer>
              <LinkContainer to="/video">
                <NavItem eventKey={3.4}>Video</NavItem>
              </LinkContainer>
              <LinkContainer to="/imageEditing">
                <NavItem eventKey={4}>Image Editing</NavItem>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

  
    </div>
    );
  }
}
