import React from 'react';
//import P5Wrapper from 'react-p5-wrapper';
//import rotation from '../p5sketches/sketch1'
//import sketch from '../p5sketches/sketch1'
//import star from '../p5sketches/star'
//import newp5 from '../p5sketches/newp5'
//import { Carousel } from 'react-responsive-carousel';
import P5Carouse from '../carousel/p5carousel';

export default class P5 extends React.Component {
  render() {
    return (
      <div className="p5Page">
        <h1 className="glitch" data-text="P5.js">P5.js</h1>

        <P5Carouse />
        <p className="p5text">More available on my GitHub</p>
      </div>
    );
  }
}

// <P5Wrapper sketch={sketch}  />
// <P5Wrapper sketch={newp5}  />
// <P5Wrapper sketch={star}  />
//newp5
