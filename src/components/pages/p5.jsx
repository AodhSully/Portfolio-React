import React from 'react';
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
