import React, { Component } from 'react';
import '../../assets/css/glitch.min.css'
//import AnimatedWrapper from "../animatedWrapper/animatedWrapper";

// const css = {
//   color: 'white',
//   fontSize: 100,
//   textAlign: 'center',
//
// }



export default class HomePage extends Component {
  render() {
    return (
      <div>

        <h1 className="glitch" data-text="GLITCH">Portfolo</h1>
        <h1 className="text">
          This is the homePage
        </h1>

        <br/>
        <br/><br/>
        <br/>
        <p className="glitch">stuff goes here in the HomePage</p>
      </div>
    );
  }
}



// export default HomePage;
