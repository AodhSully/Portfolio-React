

export default function sketch (b) {



b.setup = function() {
  b.createCanvas(500, 250);
  b.background(51);
  b.position = b.createVector(100, 100);
  b.velocity = b.createVector(5, 5);
}

b.draw = function() {
  //redraw background
  b.background(100);

  b.position.add(b.velocity);

  if ((b.position.x > b.width) || (b.position.x < 0)) {
    b.velocity.x = b.velocity.x * -1;
  }
  if ((b.position.y > b.height) || (b.position.y < 0)) {
    b.velocity.y = b.velocity.y * -1;
  }

  //ball color + size
  b.stroke(0,  255, 0);
  b.strokeWeight(5);
  b.fill(255, 0, 0);
  b.ellipse(b.position.x, b.position.y, 48, 48);
}
}
