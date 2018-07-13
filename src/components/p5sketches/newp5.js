// import React from 'react'
// import ReactDOM from 'react-dom'

export default function sketch (sketch) {

  var x = 100;
  var y = 100;

  sketch.setup = function() {
    sketch.createCanvas(600, 200);
  };

  sketch.draw = function() {
    sketch.background(100);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};














//
//
// export default class NewP5 extends React.createClass{
//   render () {
//     return React.createElement('svg', {
//       width: '640',
//       height: '480'
//     }, React.createElement('circle', {
//       cx: '50',
//       cy: '50',
//       r: '40',
//       stroke: 'black',
//       fill: 'white'
//     }));
//   }
// }
//
