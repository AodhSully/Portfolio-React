import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Nav, NavItem, Dropdown, Button, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import Paper from 'material-ui/Paper';

import Logo from '../../images/recoHero/logo.png';
import SearchBar from '../search/searchBar.jsx';

class Header extends Component {
  render() {
    return (
      <Paper zDepth={2}>
        <header>
            <nav>

                <ul className="NavBarLogo">
                  <li  href="#" ><img src={Logo} alt="RecoHero Logo"></img></li >
                </ul>
                  <ul className="navLeft">
                    <li><Link to="/">Explore</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">What We Do</Link></li>
                    <li><Link to="/">Network</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Log In</Link></li>
                    <li><Link to="/">Sign Up</Link></li>
                  </ul>



                  <div className="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        <a href="#" class="navbar-brand">Aodh O'Sullivan</a>
      </div>

            </nav>
        </header>
      </Paper>
    );
  }
}

export default Header;
