import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './assets/css/default.min.css';


import Header from './components/headerComponent/header.jsx';
import Footer from './components/footerComponent/footer.jsx';
import HomePage from './components/pages/homePage.jsx';
import Products from './components/pages/products.jsx';




class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
          <Router>
        <div className="App">
          <Header />

                <Route exact path='/' component={HomePage} />
                <Route exact path='/products' component={Products} />

          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
