import React, { Component } from 'react';
import '../../assets/css/glitch.min.css'
//import AnimatedWrapper from "../animatedWrapper/animatedWrapper";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <h1 className="glitch" data-text="Portfolio">Portfolio</h1>
        <div className="homeText">
          <h1>Welcome to my Portfolio</h1>
          <br/>
          <br/>
          <p className="textHomePage">Throughout the site you will find works I have completed in coding, audio, video and Image editiing </p>
          <p className="textHomePage">along with links to external sites hosting my works</p>
          <h1>Enjoy!</h1>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}
