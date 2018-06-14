import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, Navbar, MenuItem, Dropdown, Button, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../components/pages/homePage'
import Products from '../../components/pages/products'
import P5 from '../../components/pages/p5'
import github from '../../components/pages/github'
import tracks from '../../components/pages/tracks';
import mixing from '../../components/pages/mixing';
import sets from '../../components/pages/sets';


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

              <NavItem> <Link to="/homePage">Home</Link></NavItem>
              <NavItem eventKey={1}><Link to="/github">GitHub</Link></NavItem>
              <NavItem eventKey={2}><Link to="/p5">P5.js </Link></NavItem>
              <NavItem divider />
              <NavItem divider />
              <NavItem eventKey={3.1}><Link to="/tracks">Tracks</Link></NavItem>
              <NavItem eventKey={3.2}><Link to="/mixing">Mixing</Link></NavItem>
              <NavItem eventKey={3.3}><Link to="/sets">Sets</Link></NavItem>

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
