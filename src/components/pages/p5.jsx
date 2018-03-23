import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
//import rotation from '../p5sketches/sketch1'
import sketch from '../p5sketches/sketch1'
import star from '../p5sketches/star'

export default class P5 extends React.Component {
  render() {
    return (
      <div>
        <p>'aslkfjsdlfjs       sdlfkjsldfj      sldjfnsldfsdlflsdfjsd      sdlfkjsdlfjsdlfjsfj'</p>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}
