import React from 'react';
import {Carousel} from 'react-responsive-carousel';

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5sketches/sketch1'
import batton from '../p5sketches/batton'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ball from '../p5sketches/ball';
// import matrix from '../p5sketches/matrix';
import bubbles from '../p5sketches/bubbles';
// import fractal from '../p5sketches/fractal';
import vector from '../p5sketches/vector';
import recursion from '../p5sketches/recursion';

export default class P5Carousel extends React.Component {
  render() {
    return (<div className="carouselImage">
      <div>
        <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} stopOnHover={true} interval={3000}>
          <div>
            <P5Wrapper className="p5canvas" sketch={bubbles}/>
            <p className="p5Title">Falling Bubbles</p>
          </div>
          <div>
            <P5Wrapper className="p5canvas" sketch={batton}/>
            <p className="p5Title">Spining Batton</p>
          </div>
          <div>
            <P5Wrapper sketch={vector}/>
            <p className="p5Title">A vector that follows your mouse</p>
          </div>
          <div>
            <P5Wrapper sketch={ball}/>
            <p className="p5Title">Bouncing Ball</p>
          </div>
          <div>
            <P5Wrapper className="p5canvas" sketch={sketch}/>
            <p className="p5Title">WebGL Globe</p>
          </div>
          <div>
            <P5Wrapper className="p5canvas" sketch={recursion}/>
            <p className="p5Title">Recursive Circles</p>
          </div>
        </Carousel>
      </div>
    </div>);
  }
}
