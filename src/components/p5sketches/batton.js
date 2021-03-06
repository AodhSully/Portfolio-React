export default function sketch (b) {

  let angle = 0;
  let aVelocity = 0;
  //let aAcceleration = 0.0001;
  let aAcceleration = 0.002;

  b.setup = function() {
    b.createCanvas(900, 400);
  }

  b.draw = function() {
    b.background(51);

    b.translate(b.width / 2, b.height / 2);
    b.rotate(angle);

  //line + balls
    b.stroke(0);
    b.strokeWeight(2);
    b.fill(255,255,0);

  //object placement
    b.line(-80, 0, 80, 0);
    b.ellipse(80, 0, 16, 16);
    b.ellipse(-80, 0, 16, 16);

    angle += aVelocity;
    aVelocity += aAcceleration;
  }
}
