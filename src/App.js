import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TransitionGroup from "react-transition-group/TransitionGroup";

import './assets/css/default.min.css';

// import Header from './components/headerComponent/header.jsx';
import NavBar from './components/navBar/navbar';
import HomePage from './components/pages/homePage.jsx';
import Video from './components/pages/video.jsx';
import Particles from './components/particles/particles';
import p5 from './components/pages/p5'
import github from './components/pages/github';
import tracks from './components/pages/tracks';
import sets from './components/pages/sets';
import mixing from './components/pages/mixing';
import imageEditing from './components/pages/imageEditing';
import Footer from './components/footerComponent/footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Particles />
          <NavBar />
                <Route exact path='/' component={HomePage} />
                <Route exact path='/homePage' component={HomePage} />
                <Route exact path='/github' component={github} />
                <Route exact path='/p5' component={p5} />
                <Route exact path='/tracks' component={tracks} />
                <Route exact path='/sets' component={sets} />
                <Route exact path='/mixing' component={mixing} />
                <Route exact path='/video' component={Video} />
                <Route exact path='/imageEditing' component={imageEditing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
