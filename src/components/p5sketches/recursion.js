export default function star (a) {
  //a.p5.disableFriendlyErrors = true;
  a.setup = function () {
    a.createCanvas(900, 400);
    // var red = 255;
    // var green = 255;
    // var blue = 255;
  }

  a.draw = function () {
    a.background(51);
    drawCircle(a.width/2, a.height/2,500);
    a.noLoop();
  }

  function drawCircle(x,y,r) {
    //a.stroke(a.red, a.green, a.blue);
    a.stroke(0, 255, 255);
    a.noFill();
    a.ellipse(x, y, r, r);
    if(r > 1) {
      //circles left + right
      drawCircle(x + r/2, y, r/2);
      drawCircle(x - r/2, y, r/2);
      //recursive 3d effect
      // if(r > 1) {
      //   r *= 0.75;
      // drawCircle(x, y, r);
      // }
    }
  }

  // function mousePressed() {
  //     console.log("mouse click")
  //     a.red = a.random(255);
  //     a.green = a.random(255);
  //     a.blue = a.random(255);
  // }
}
