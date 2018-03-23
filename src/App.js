import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './assets/css/default.min.css';

import Header from './components/headerComponent/header.jsx';
import Footer from './components/footerComponent/footer.jsx';
import HomePage from './components/pages/homePage.jsx';
import Products from './components/pages/products.jsx';
import NavBar from './components/navBar/navbar';
import Particles from './components/particles/particles';
import p5 from './components/pages/p5'
import github from './components/pages/github';
import tracks from './components/pages/tracks';
import sets from './components/pages/sets';
import mixing from './components/pages/mixing';

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
          <Router>
        <div className="App">

          <Particles />
          <NavBar />

                <Route exact path='/homePage' component={HomePage} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/p5' component={p5} />
                <Route exact path='/github' component={github} />
                <Route exact path='/tracks' component={tracks} />
                <Route exact path='/sets' component={sets} />
                <Route exact path='/mixing' component={mixing} />
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
