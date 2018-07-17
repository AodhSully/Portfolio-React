import React, { Component } from 'react';
import '../../assets/css/glitch.min.css'
//import AnimatedWrapper from "../animatedWrapper/animatedWrapper";

export default class HomePage extends Component {
  render() {
    return (
      <div>

        <h1 className="glitch" data-text="Portfolo">Portfolo</h1>
        <h1 className="text">
          This is the homePage
        </h1>

        <br/>
        <br/><br/>
        <br/>
        <p className="placeHolder">stuff goes here in the HomePage</p>
      </div>
    );
  }
}
