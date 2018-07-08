import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, NavItem,  Navbar  } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import { LinkContainer } from 'react-router-bootstrap';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from '../../components/pages/homePage'
// import Products from '../../components/pages/products'
// import P5 from '../../components/pages/p5'
// import github from '../../components/pages/github'
// import tracks from '../../components/pages/tracks';
// import mixing from '../../components/pages/mixing';
// import sets from '../../components/pages/sets';


class NavBar extends Component {
  render() {
    return (
      <div>

      <Paper zDepth={2}>


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

                <NavItem divider />
                <NavItem divider />
              <LinkContainer to="/tracks">
                <NavItem eventKey={3.1}>Tracks</NavItem>
              </LinkContainer>
              <LinkContainer to="/mixing">
                <NavItem eventKey={3.2}>Mixing</NavItem>
              </LinkContainer>
              <LinkContainer to="/sets">
                <NavItem eventKey={3.3}>Sets</NavItem>
              </LinkContainer>

            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Image Editing
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </Paper>
    </div>
    );
  }
}

export default NavBar;
